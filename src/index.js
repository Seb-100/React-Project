import React from "react";
import ReactDom from 'react-dom';
// import ColorGrid from "./colorgrid";
import Register from "./Form";



const root = document.getElementById('root');
const roots = ReactDom.createRoot(root);

roots.render(
    <div>
        <Register />
        
    </div>
);