import React from "react";
import ReactDOM from "react-dom/client";
import "@css/common.css";
import "@js/globalFn";

import "./index.css";
// import App from './App';
import { HashRouter } from "react-router-dom";
import MyRouter from "@router/index";
import RouteAuth from "@/components/global/RouteAuth";

import { Provider } from "react-redux";
import { store } from "@store/index";
// import reportWebVitals from './reportWebVitals';

// console.log(process.env);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <RouteAuth>
                    <MyRouter />
                </RouteAuth>
            </HashRouter>
        </Provider>
        {/* <App /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
