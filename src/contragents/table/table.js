import html from './table.html';
import './table.css';
import {removeAgent} from "../storage/storage";
import {setAgent, show} from "../modal/modal";

const element = document.createElement('div');
element.innerHTML = html;

const rootElement = element;

const tableWrapperElement = rootElement.querySelector('.ca-table-wrapper');
const tHeadElement = tableWrapperElement.querySelector('thead');
const tBodyElement = tableWrapperElement.querySelector('tbody');
const templateHeadRow = rootElement.querySelector("template[id='template-head-column']")
const templateRowHead = rootElement.querySelector("template[id='template-row-head']")
const templateRowColumn = rootElement.querySelector("template[id='template-row-column']")
const templateRowDeleteButton = rootElement.querySelector("template[id='template-row-delete-button']")

const headRowElement = document.createElement('tr');

for (const column of ['Наименование', 'ИНН', 'КПП', 'Адрес', 'Удалить']) {
    const columnElement = templateHeadRow.content.children[0].cloneNode(true);
    columnElement.innerHTML = column;
    headRowElement.appendChild(columnElement);
}
tHeadElement.appendChild(headRowElement);

const createRowColumn = (content) => {
    const rowColumn = templateRowColumn.content.children[0].cloneNode(true);
    rowColumn.innerHTML = content;
    return rowColumn;
}

export const addAgent = (agent) => {
    const bodyRowElement = document.createElement('tr');

    // add css class
    bodyRowElement.classList.add('ca-table-row')
    bodyRowElement.addEventListener('dblclick', ev => {
        show();
        setAgent(agent);
    });

    const rowHead = templateRowHead.content.children[0].cloneNode();

    bodyRowElement.appendChild(rowHead)
    rowHead.innerHTML = agent.name;
    bodyRowElement.appendChild(createRowColumn(agent.inn));
    bodyRowElement.appendChild(createRowColumn(agent.kpp));
    bodyRowElement.appendChild(createRowColumn(agent.address));
    const rowDeleteButton = templateRowDeleteButton.content.children[0].cloneNode();
    rowDeleteButton.innerHTML = 'Удалить';
    rowDeleteButton.addEventListener('click', evt => {
        tBodyElement.removeChild(bodyRowElement);
        removeAgent(agent.inn);
        evt.stopPropagation();
    });
    const lastColumn = createRowColumn('');
    lastColumn.appendChild(rowDeleteButton);
    bodyRowElement.appendChild(lastColumn);

    tBodyElement.appendChild(bodyRowElement)
};

export default () => element;
