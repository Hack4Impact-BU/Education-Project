import React from "react";
import {SidebarData} from "./SidebarData";
import './Sidebar.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="title">The</h2>
            <h2 className="title">Education</h2>
            <h2 className="title">Project</h2>
            <ul className="sidebar-list">
                {
                SidebarData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}}
                        >
                            <Link to={val.link} ></Link>
                            <span id="name">{val.tittle}</span>
                        </li> 
                    )
                })
                }
            </ul>
        </div>
    )
};

export default Sidebar;