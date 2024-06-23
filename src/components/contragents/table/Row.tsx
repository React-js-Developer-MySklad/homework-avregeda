import './table.css';
import React, {memo, useEffect} from "react";
import {Contragent} from "../types";

type iProps = {
    agent: Contragent
    onDoubleClick: () => void;
    onDelete: () => void;
}

export const Row: React.FC<iProps> = memo(({agent, onDoubleClick, onDelete}) => {
    useEffect(() => {
        console.log('Row mounted', agent.name);
        return () => console.log('Row unmounted', agent.name);
    });
    return (
        <tr className='ca-table-row' onDoubleClick={onDoubleClick}>
            <th scope='row' className='ca-table-row-head'>{agent.name}</th>
            <td className='ca-table-row-column'>{agent.inn}</td>
            <td className='ca-table-row-column'>{agent.kpp}</td>
            <td className='ca-table-row-column'>{agent.address}</td>
            <td className='ca-table-row-column'>
                <button type='button' className='ca-table-row-delete-button' onClick={onDelete}>Удалить</button>
            </td>
        </tr>
    );
});
