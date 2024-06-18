import html from "./app.html";
import './app.css';
import '../contragents/table/table'
import table from "../contragents/table/table";
import {addAgent} from "../contragents/table/table";
import menu from "../contragents/menu/menu";
import modal from "../contragents/modal/modal";
import {getAgents} from "../contragents/storage/storage";


const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const nav = rootElement.querySelector('nav');
nav.append(menu());

const main = rootElement.querySelector('main');
main.append(table());

const agents = getAgents();

agents.forEach(a => addAgent(a));

rootElement.append(modal());
