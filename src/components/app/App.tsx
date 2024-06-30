import React, {useState, useEffect, useCallback} from "react";
import {Menu} from "../contragents/menu/Menu";
import {Table} from "../contragents/table/Table";
import {Contragent} from "../contragents/types";
import {getAgents, removeAgent, saveAgent} from "../contragents/repository/repository";
import {Modal} from "../contragents/modal/Modal";

export const App: React.FC = () => {
    const [agents, setAgents] = useState([] as Contragent[]);
    const [agent, setAgent] = useState(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
        const agents = getAgents();
        setAgents(agents);
    }, []);

    const createAgent = useCallback(() => {
        setAgent(null);
        setShow(true);
    }, []);

    const editAgent = useCallback((a: Contragent) => {
        setAgent(a);
        setShow(true);
    }, []);

    const deleteAgent = useCallback((a: Contragent) => {
        removeAgent(a.id);
        const agents = getAgents();
        setAgents(agents);
    }, []);

    const onCLose = useCallback(() => {
        setShow(false);
        setAgent(null);
    }, []);

    const onSave = useCallback((a: Contragent) => {
        saveAgent(a);
        const agents = getAgents();
        setAgents(agents);
        setShow(false);
        setAgent(null);
    }, []);

    return (<>
            <main>
                <Menu onAdd={createAgent}/>
                <Table agents={agents} onEdit={editAgent} onDelete={deleteAgent}/>
            </main>
            {show && <Modal agent={agent} onClose={onCLose} onSave={onSave}/>}
        </>
    );
}
