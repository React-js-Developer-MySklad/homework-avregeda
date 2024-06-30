import {createContext} from "react";
import {RequestState} from "./request.type";

export const RequestContext =
    createContext<RequestState>(null);
