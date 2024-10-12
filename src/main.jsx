import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./project/projectStore/store";
import Index from "./project/components/Index.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter >
        <Index />
        </BrowserRouter>
    </Provider>
);
