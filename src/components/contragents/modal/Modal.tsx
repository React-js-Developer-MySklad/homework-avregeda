import './modal.css';
import React, {FormEvent, useState} from "react";
import {Contragent} from "../types";

type iProps = {
    agent?: Contragent;
    onClose: () => void;
    onSave: (agent: Contragent) => void;
};

export const Modal: React.FC<iProps> = ({agent, onClose, onSave}) => {
    const [name, setName] = useState(agent ? agent.name : '');
    const [inn, setInn] = useState(agent ? agent.inn : '');
    const [kpp, setKpp] = useState(agent ? agent.kpp : '');
    const [address, setAddress] = useState(agent ? agent.address : '');

    const onSubmit = (e: FormEvent) => {
        const l = {
            id: agent?.id,
            name: name,
            inn: inn,
            kpp: kpp,
            address: address
        };
        onSave(l);
        e.preventDefault();
    }

    return (<>
            <div tabIndex={-1} aria-hidden="true" id="crud-modal" className='modal'>
                <div className="modal-width">
                    <div className="modal-bg">
                        <div className="header-wrapper">
                            <h3 className="modal-header">Добавить контрагента</h3>
                            <button type="button"
                                    className="close-button"
                                    onClick={onClose}>
                                <span>Закрыть</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5" onSubmit={onSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="field-name">Наименование</label>
                                    <input type="text" name="name" id="name" className="field-input" required
                                           value={name} aria-label='name'
                                           onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="inn" className="field-name">ИНН</label>
                                    <input type="number" name="inn" id="inn" className="field-input" required
                                           value={inn} aria-label='inn'
                                           onChange={e => setInn(e.target.value)}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="kpp" className="field-name">КПП</label>
                                    <input type="number" name="kpp" id="kpp" className="field-input"
                                           value={kpp} aria-label='kpp'
                                           onChange={e => setKpp(e.target.value)}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="address" className="field-name">Адрес</label>
                                    <textarea id="address" rows={4} className="field-area"
                                              value={address} aria-label='address'
                                              onChange={event => setAddress(event.target.value)}/>
                                </div>
                            </div>
                            <button type="submit" className="add-button">
                                Добавить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="glass-screen"/>
        </>
    );
};
