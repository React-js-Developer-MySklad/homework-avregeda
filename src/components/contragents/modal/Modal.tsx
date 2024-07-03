import './modal.css';
import React from "react";
import {Contragent} from "../types";
import {Field, Form} from "react-final-form";

type iProps = {
    agent?: Contragent;
    onClose: () => void;
    onSave: (agent: Contragent) => void;
};

export const Modal: React.FC<iProps> = ({agent, onClose, onSave}) => {

    const onSubmit = (a: Contragent) => {
        const l = {
            id: agent?.id,
            name: a.name,
            inn: a.inn,
            kpp: a.kpp,
            address: a.address
        };
        onSave(l);
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
                        <Form<Contragent> onSubmit={onSubmit} initialValues={agent} validateOnBlur>
                            {props => (
                                <form className="p-4 md:p-5" onSubmit={props.handleSubmit}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <Field name='name'>
                                                {props1 => (
                                                    <>
                                                        <label htmlFor="name"
                                                               className="field-name">Наименование</label>
                                                        <input type="text" name="name" id="name" required
                                                               className="field-input" aria-label='name' {...props1.input}/>
                                                        {props1.meta.error && <span>{props1.meta.error.message}</span>}
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                        <div className="col-span-2">
                                            <Field name='inn' validate={(value, allValues, meta) => {
                                                if (value && value.length !== 12) {
                                                    return {message: 'Длина ИНН должна быть 12 символов'}
                                                }
                                                return undefined;
                                            }
                                            }>
                                                {props1 => (
                                                    <>
                                                        <label htmlFor="inn" className="field-name">ИНН</label>
                                                        <input type="number" name="inn" id="inn" className="field-input"
                                                               aria-label='inn'  {...props1.input}/>
                                                        {props1.meta.error && <span>{props1.meta.error.message}</span>}
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                        <div className="col-span-2">

                                            <Field name='kpp' validate={(value, allValues, meta) => {
                                                if (value && value.length !== 9) {
                                                    return {message: 'Длина КПП должна быть 9 символов'}
                                                }
                                                return undefined;
                                            }
                                            }>
                                                {props1 => (
                                                    <>
                                                        <label htmlFor="kpp" className="field-name">КПП</label>
                                                        <input type="number" name="kpp" id="kpp" className="field-input"
                                                               aria-label='kpp'  {...props1.input}/>
                                                        {props1.meta.error && <span>{props1.meta.error.message}</span>}
                                                    </>
                                                )}
                                            </Field>

                                        </div>
                                        <div className="col-span-2">
                                            <Field name='address'>
                                                {props1 => (
                                                    <>
                                                        <label htmlFor="address" className="field-name">Адрес</label>
                                                        <textarea id="address" rows={4} className="field-area"
                                                                  name='address'
                                                                  aria-label='address'  {...props1.input}/>
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                    <button type="submit" className="add-button">
                                        Добавить
                                    </button>
                                </form>
                            )
                            }
                        </Form>
                    </div>
                </div>
            </div>
            <div className="glass-screen"/>
        </>
    );
};
