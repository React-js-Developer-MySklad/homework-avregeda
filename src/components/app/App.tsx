import React, {useState, useEffect, useCallback, useContext} from "react";
import {Menu} from "../contragents/menu/Menu";
import {Table} from "../contragents/table/Table";
import {Contragent} from "../contragents/types";
import {Modal} from "../contragents/modal/Modal";
import {RequestContext} from "../../context/request/request.context";

export const App: React.FC = () => {
    const {agents, getAgents, saveAgent, updateAgent, removeAgent} = useContext(RequestContext);
    const [agent, setAgent] = useState(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
        console.log('agents req')
        getAgents()
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
    }, []);

    const onCLose = useCallback(() => {
        setShow(false);
        setAgent(null);
    }, []);

    const onSave = useCallback((a: Contragent) => {
        if (a.id) {
            updateAgent(a);
        } else {
            saveAgent(a);
        }
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
