export const saveAgent = (agent) => {
    localStorage.setItem(agent.inn, JSON.stringify(agent));
}

export const getAgents = () => {
    let result = [];
    for (let i = 0; i < localStorage.length; i++) {
        result.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    return result;
};


export const removeAgent = (inn) => localStorage.removeItem(inn);
