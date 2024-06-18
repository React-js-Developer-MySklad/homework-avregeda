import html from './modal.html';
import './modal.css';
import {saveAgent} from "../storage/storage";
import {Modal} from "flowbite";

const element = document.createElement('div');
element.innerHTML = html;

const targetEl = element.querySelector('div');

const modal = new Modal(targetEl, {
    placement: 'center',
    backdrop: 'dynamic',
    'closable': true
});

const nameElement = () => document.getElementById('name');
const innElement = () => document.getElementById('inn');
const kppElement = () => document.getElementById('kpp');
const addressElement = () => document.getElementById('address');

modal.updateOnHide(() => {
    nameElement().value = '';
    innElement().value = '';
    kppElement().value = '';
    addressElement().value = '';
});

modal.updateOnShow(() => {
    innElement().addEventListener("change", ev => {
        if (ev.target.value.length !== 11) {
            alert('ИНН должен быть 11 символов!');
        }
    });
    kppElement().addEventListener("change", ev => {
        if (ev.target.value.length !== 9) {
            alert('КПП должен быть 9 символов!');
        }
    });
});

const addButtonElement = element.querySelector('.add-button');
addButtonElement.addEventListener('click', evt => {
    const name = nameElement().value;
    const inn = innElement().value;
    const kpp = kppElement().value;
    const address = addressElement().value;
    if (name && inn) {
        saveAgent({
            name: name,
            inn: inn,
            kpp: kpp,
            address: address
        })
    }
});

export const show = () => modal.show();

export const setAgent = (agent) => {
    nameElement().value = agent.name;
    innElement().value = agent.inn;
    kppElement().value = agent.kpp;
    addressElement().value = agent.address;
};

export default () => element;
