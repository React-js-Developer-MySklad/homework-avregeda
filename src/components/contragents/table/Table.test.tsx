import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Table} from './Table';
import {Contragent} from "../types";

test('table with 2 agents rendered', () => {
    const onDelete = jest.fn();
    const onEdit = jest.fn();

    const agents: Contragent[] = [
        {
            id: '0',
            name: "name",
            inn: "12345",
            kpp: "54321",
            address: "test address"
        },
        {
            id: '1',
            name: "name2",
            inn: "0000",
            kpp: "9999",
            address: "second test address"
        }
    ]

    const {getByText} = render(<Table agents={agents} onEdit={onEdit} onDelete={onDelete}/>);
    expect(getByText('12345')).toBeTruthy();
    expect(getByText('0000')).toBeTruthy();

});
