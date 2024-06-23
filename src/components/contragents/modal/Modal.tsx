import './modal.css';
import React, {FormEvent, memo, useEffect, useRef, useState} from "react";
import {Contragent} from "../types";
import {onShow} from "./onShow";

type iProps = {
    agent?: Contragent;
    show: boolean;
    onClose: () => void;
    onSave: (agent: Contragent) => void;
};

export const Modal: React.FC<iProps> = memo(({agent, show, onClose, onSave}) => {
    console.log('modal', show)
    const modalRef = useRef<HTMLDivElement>(null);
    const [name, setName] = useState('');
    const [inn, setInn] = useState('');
    const [kpp, setKpp] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = (e: FormEvent) => {
        const l = {
            id: agent?.id,
            name: name,
            inn: inn,
            kpp: kpp,
            address: address
        };
        console.log(l);
        onSave(l);
        e.preventDefault();
    }

    useEffect(() => {
        console.log('modal mounted');
        return () => console.log('modal unmounted');
    });

    onShow(modalRef, show, {onClose});

    useEffect(() => {
        if (agent) {
            setName(() => agent.name);
            setInn(() => agent.inn);
            setKpp(() => agent.kpp);
            setAddress(() => agent.address);
        } else {
            setName('');
            setInn('');
            setKpp('');
            setAddress('');
        }
    }, [agent]);

    return (
        <div ref={modalRef} tabIndex={-1} aria-hidden="true" id="crud-modal"
             className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Добавить контрагента
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={onClose}>
                            <span className="sr-only">Закрыть</span>
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
    );
});
