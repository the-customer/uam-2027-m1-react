import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Aly from "./Aly.jsx";
import Catalog from "./components/Catalog.jsx";

const divRoot = document.getElementById("root");

createRoot(divRoot).render(
  <HashRouter>
    
    <Routes>
        <Route path="/" element={ <Catalog/> }/>
        <Route path="/lab/:slug/*" element={ <Aly/> }/>
        <Route path="*" element={ <Catalog/> } />
    </Routes>
</HashRouter>

);

