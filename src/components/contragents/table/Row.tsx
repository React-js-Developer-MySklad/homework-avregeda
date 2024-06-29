import './table.css';
import React from "react";
import {Contragent} from "../types";

type iProps = {
    agent: Contragent
    onDoubleClick: (agent: Contragent) => void;
    onDelete: (agent: Contragent) => void;
}

export const Row: React.FC<iProps> = ({agent, onDoubleClick, onDelete}) => {
    return (
        <tr className='ca-table-row' onDoubleClick={() => onDoubleClick(agent)}>
            <th scope='row' className='ca-table-row-head'>{agent.name}</th>
            <td className='ca-table-row-column'>{agent.inn}</td>
            <td className='ca-table-row-column'>{agent.kpp}</td>
            <td className='ca-table-row-column'>{agent.address}</td>
            <td className='ca-table-row-column'>
                <button type='button' className='ca-table-row-delete-button' onClick={() => onDelete(agent)}>Удалить
                </button>
            </td>
        </tr>
    );
};
