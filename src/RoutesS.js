import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
//HashRouter

export function RoutesS() {
    return (
        <Router>
       
                <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="login" element={<App/>}/>
                </Routes>
        
        </Router>
    );
}

export default RoutesS;
