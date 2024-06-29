import {Contragent} from "../types";
import {v4 as uuidv4} from 'uuid';

const CONTRAGENTS = 'CONTRAGENTS';

export const saveAgent = (agent: Contragent) => {
    agent.id = agent.id ? agent.id : uuidv4();
    let agents = getAgents().filter(a => a.id != agent.id);
    agents.push(agent);
    localStorage.setItem(CONTRAGENTS, JSON.stringify(agents))
};

export const getAgents = () => {
    const agents = JSON.parse(localStorage.getItem(CONTRAGENTS)) as Contragent[];
    return agents ? agents : [];
}

export const removeAgent = (id: string) => {
    localStorage.setItem(CONTRAGENTS, JSON.stringify(getAgents().filter(a => a.id != id)))
}
