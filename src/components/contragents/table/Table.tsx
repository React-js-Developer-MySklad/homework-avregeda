import './table.css';
import React, {memo, useEffect} from "react";
import {Contragent} from "../types";
import {Row} from "./Row";

type iProps = {
    agents: Contragent[];
    onEdit: (agent: Contragent) => void;
    onDelete: (agent: Contragent) => void;
}

export const Table: React.FC<iProps> = memo(({agents, onEdit, onDelete}) => {
    const columnNames: string[] = ['Наименование', 'ИНН', 'КПП', 'Адрес', 'Удалить'];
    useEffect(() => {
        console.log('Table mounted');
        return () => console.log('Table unmounted');
    });

    return (
        <div className='ca-table-wrapper'>
            <table className='ca-table'>
                <thead className='ca-table-head'>
                <tr>
                    {
                        columnNames.map(c => <th scope='col' className='ca-table-head-column' key={c}>{c}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                {
                    agents.map(a => <Row key={a.id}
                                         agent={a}
                                         onDoubleClick={() => {
                                             onEdit(a);
                                         }}
                                         onDelete={() => {
                                             onDelete(a);
                                         }}
                    />)
                }
                </tbody>
            </table>
        </div>
    );
});
