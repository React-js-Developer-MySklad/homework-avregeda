import {Contragent} from "../types";
import {v4 as uuidv4} from 'uuid';

export const saveAgent = (agent: Contragent) => {
    agent.id = agent.id ? agent.id : uuidv4();
    localStorage.setItem(agent.id, JSON.stringify(agent));
};

export const getAgents = () => {
    let result: Contragent[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        result.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    return result;
}

export const removeAgent = (id: string) => localStorage.removeItem(id);
