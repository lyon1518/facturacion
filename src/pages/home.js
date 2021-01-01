import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Subnav from "../components/subnav";
import { Link } from "react-router-dom";

function home() {
    return(
        <div>
            <Subnav data={[]}/>
            <div className="p-4">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <Link to="/facturas">
                            <div className="p-4 text-center text-dark">
                                <FontAwesomeIcon icon={faFileAlt} className="fa-5x m-auto"/><br/>
                                <h2>Facturación</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/nominas">
                            <div className="p-4 text-center text-dark">
                                <FontAwesomeIcon icon={faCreditCard} className="fa-5x m-auto"/><br/>
                                <h2>Nomina</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default home