import {Contragent} from "../../components/contragents/types";

export type RequestState = {
    agents: Contragent[];
    getAgents: () => void;
    saveAgent: (agent: Contragent) => void;
    updateAgent: (agent: Contragent) => void;
    removeAgent: (id: string) => void;
}
