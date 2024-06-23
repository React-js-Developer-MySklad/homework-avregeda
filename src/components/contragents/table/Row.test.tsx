import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Row} from './Row';
import {Contragent} from "../types";

test('row to be rendered with agent doubleclicked and delete button clicked', () => {
    const agent: Contragent = {
        id: '0',
        name: "name",
        inn: "12345",
        kpp: "54321",
        address: "test address"
    }

    const onDelete = jest.fn();
    const onDoubleClick = jest.fn();

    const {getByText} = render(<table>
        <tbody>
            <Row agent={agent} onDelete={onDelete} onDoubleClick={onDoubleClick}/>
        </tbody>
    </table>);
    expect(getByText('name')).toBeTruthy();
    expect(getByText('12345')).toBeTruthy();
    expect(getByText('54321')).toBeTruthy();
    expect(getByText('test address')).toBeTruthy();

    fireEvent.doubleClick(getByText('name'));
    expect(onDoubleClick).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText('Удалить'));
    expect(onDelete).toHaveBeenCalledTimes(1);
});
