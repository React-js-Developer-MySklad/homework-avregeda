import './table.css';
import React from "react";
import {Contragent} from "../types";
import {Row} from "./Row";

type iProps = {
    agents: Contragent[];
    onEdit: (agent: Contragent) => void;
    onDelete: (agent: Contragent) => void;
}

const COLUMN_NAMES: string[] = ['Наименование', 'ИНН', 'КПП', 'Адрес', 'Удалить'];

export const Table: React.FC<iProps> = ({agents, onEdit, onDelete}) => {
    return (
        <div className='ca-table-wrapper'>
            <table className='ca-table'>
                <thead className='ca-table-head'>
                <tr>
                    {
                        COLUMN_NAMES.map((c, index) =>
                            <th scope='col' className='ca-table-head-column' key={index}>{c}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                {
                    agents.map(a =>
                        <Row key={a.id}
                             agent={a}
                             onDoubleClick={onEdit}
                             onDelete={onDelete}
                        />)
                }
                </tbody>
            </table>
        </div>
    );
};
