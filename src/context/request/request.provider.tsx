import React, {PropsWithChildren, useCallback, useState} from "react";
import {RequestContext} from "./request.context";
import {httpRequest} from "../../tools/http-request";
import {Contragent} from "../../components/contragents/types";
import {RequestState} from "./request.type";

export const RequestProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [agents, setAgents] =
        useState<Contragent[]>([])

    const getAgents = useCallback(() => {
        httpRequest<Contragent[]>('http://localhost:3000/contragents', {
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }).then(setAgents)
    }, [])

    const saveAgent = useCallback((agent: Contragent) => {
        httpRequest<Contragent[]>('http://localhost:3000/contragents', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST', body: JSON.stringify(agent)
        }).then(getAgents)
    }, [])

    const updateAgent = useCallback((agent: Contragent) => {
        httpRequest<Contragent[]>(`http://localhost:3000/contragents/${agent.id}`, {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT', body: JSON.stringify(agent)
        }).then(getAgents)
    }, [])

    const removeAgent = useCallback((id: string) => {
        httpRequest<Contragent[]>(`http://localhost:3000/contragents/${id}`, {
            headers: {'Content-Type': 'application/json'},
            method: 'DELETE'
        }).then(getAgents)
    }, [])

    const context = {
        agents,
        getAgents,
        saveAgent,
        updateAgent,
        removeAgent
    } as RequestState

    return (
        <RequestContext.Provider value={context}>
            {children}
        </RequestContext.Provider>
    )
}
