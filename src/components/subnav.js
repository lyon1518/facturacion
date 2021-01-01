import React from "react";
import { Link } from "react-router-dom";

function subNav(props) {
    return(
        <div className="navbar-dark bg-secondary subnav">
            <div className="p-2" id="navbarSupportedContent">
                <div className="centrar">
                    {
                        props.data.map((e,index)=>{
                            return(
                                <div className="nav-item" key={"li"+index}>
                                    <Link className="nav-link text-white" to={'/facturas'+e.link} onClick={()=>props.menu(e.item,e.link)}>{e.item}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default subNav