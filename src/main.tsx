import 'flowbite'
import {createRoot} from "react-dom/client";
import {App} from "./components/app/App";
import {StrictMode} from "react";
import './style.css';
import {RequestProvider} from "./context/request/request.provider";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <RequestProvider>
            <App/>
        </RequestProvider>
    </StrictMode>
);
