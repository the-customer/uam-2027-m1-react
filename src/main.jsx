import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter, Route, Routes, useParams } from "react-router-dom";
import Aly from "./Aly.jsx";
import Catalog from "./components/Catalog.jsx";
import { labs } from "./labs/catalogue.js";
import LabDetail from "./components/LabDetail.jsx";

const divRoot = document.getElementById("root");


function CurrentLab(){
  const { slug } = useParams();
  const lab = labs.find(lab => lab.slug === slug);
  return lab ? <LabDetail key={slug} lab={ lab }/> : <Catalog/>
}


createRoot(divRoot).render(
  <HashRouter>
    
    <Routes>
        <Route path="/" element={ <Catalog/> }/>
        <Route path="/lab/:slug/*" element={ <CurrentLab/> }/>
        <Route path="*" element={ <Catalog/> } />
    </Routes>
</HashRouter>

);

