import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Modal} from "./Modal";

jest.mock('../modal/onShow');

test('clean modal for new agent', () => {
    const onClose = jest.fn();
    const onSave = jest.fn();
    const utils = render(<Modal show={true} onClose={onClose} onSave={onSave}/>)

    const nameinput = screen.getByLabelText('name') as HTMLInputElement;
    const inninput = screen.getByLabelText('inn') as HTMLInputElement;
    const kppinput = screen.getByLabelText('kpp') as HTMLInputElement;
    const addressArea = screen.getByLabelText('address') as HTMLTextAreaElement;

    expect(nameinput.value).toBe('');
    expect(inninput.value).toBe('');
    expect(kppinput.value).toBe('');
    expect(addressArea.value).toBe('');

    fireEvent.change(nameinput, {target: {value: 'name'}})
    fireEvent.change(inninput, {target: {value: '1234'}})
    fireEvent.change(kppinput, {target: {value: '4321'}})
    fireEvent.change(addressArea, {target: {value: 'address'}})
    expect(nameinput.value).toBe('name');
    expect(inninput.value).toBe('1234');
    expect(kppinput.value).toBe('4321');
    expect(addressArea.value).toBe('address');

    fireEvent.click(screen.getByText('Добавить'));
    expect(onSave).toBeCalledWith({
        name: 'name',
        inn: '1234',
        kpp: '4321',
        address: 'address'
    })
});

test('filled modal for existing agent', () => {
    const onClose = jest.fn();
    const onSave = jest.fn();
    const utils = render(<Modal agent={{
        id: '1233',
        name: 'name',
        inn: '1234',
        kpp: '4321',
        address: 'address'
    }} show={true} onClose={onClose} onSave={onSave}/>)

    const nameinput = screen.getByLabelText('name') as HTMLInputElement;
    const inninput = screen.getByLabelText('inn') as HTMLInputElement;
    const kppinput = screen.getByLabelText('kpp') as HTMLInputElement;
    const addressArea = screen.getByLabelText('address') as HTMLTextAreaElement;

    expect(nameinput.value).toBe('name');
    expect(inninput.value).toBe('1234');
    expect(kppinput.value).toBe('4321');
    expect(addressArea.value).toBe('address');

    fireEvent.change(nameinput, {target: {value: 'name2'}})
    fireEvent.change(inninput, {target: {value: '12342'}})
    fireEvent.change(kppinput, {target: {value: '43212'}})
    fireEvent.change(addressArea, {target: {value: 'address2'}})
    expect(nameinput.value).toBe('name2');
    expect(inninput.value).toBe('12342');
    expect(kppinput.value).toBe('43212');
    expect(addressArea.value).toBe('address2');

    fireEvent.click(screen.getByText('Добавить'));
    expect(onSave).toBeCalledWith({
        id: '1233',
        name: 'name2',
        inn: '12342',
        kpp: '43212',
        address: 'address2'
    })
});
