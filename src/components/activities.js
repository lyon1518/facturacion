import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes, faUser, faUserCog, faTrash, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Apis from "../hooks/apis";

function vistA(params) {
    switch (params) {
        case 'No asignados':
            return(
                Apis.NAsig.map((e,index)=>{
                    return(
                        <div key={"NAsig"+index}>
                            <div className="row">
                                <div className="col-md-2 centrar">
                                    <FontAwesomeIcon icon={faUserTimes} className="fa-3x m-auto"/>
                                    {/* <div className="userA m-auto">HE</div> */}
                                </div>
                                <div className="col-md-8">{e}</div>
                                <div className="col-md-2 centrar">
                                    <button className="btn btn-success m-auto centrar">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="ml-2">Asignar</span> 
                                    </button>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            )
        case 'En curso':
            return(
                Apis.Asig.map((e,index)=>{
                    return(
                        <div key={"Curso"+index}>
                            <div className="row">
                                <div className="col-md-2 centrar">
                                    <div className="userA m-auto">{e.user}</div>
                                </div>
                                <div className="col-md-8">{e.text}</div>
                                <div className="col-md-2 centrar">
                                    <button className="btn btn-success m-auto centrar">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span className="ml-2">Terminar</span> 
                                    </button>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            )
        case 'Resueltos':
            return(
                Apis.Resueltos.map((e,index)=>{
                    return(
                        <div key={"Resueltos"+index}>
                            <div className="row">
                                <div className="col-md-2 centrar">
                                    <div className="userA m-auto">{e.user}</div>
                                </div>
                                <div className="col-md-8">{e.text}</div>
                                <div className="col-md-2 centrar">
                                    <button className="btn btn-danger m-auto centrar">
                                        <FontAwesomeIcon icon={faTrash} />
                                        <span className="ml-2">Borrar historial</span> 
                                    </button>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            )
        case 'No Resueltos':
            return(
                Apis.NResueltos.map((e,index)=>{
                    return(
                        <div key={"NResueltos"+index}>
                            <div className="row">
                                <div className="col-md-2 centrar">
                                    <div className="userA m-auto">{e.user}</div>
                                </div>
                                <div className="col-md-8">{e.text}</div>
                                <div className="col-md-2 centrar">
                                    <button className="btn btn-success m-auto centrar">
                                        <FontAwesomeIcon icon={faCheckSquare} />
                                        <span className="ml-2">Resolver</span> 
                                    </button>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            )
        default:
            break;
    }
}

function activities(props) {
    const {color,vista} = props
    return(
        <div className="card mt-10">
            <div className={"card-header text-white bg-"+color}>
                <strong>{vista}</strong>
            </div>
            <div className="card-body">
                {vistA(props.vista)}
            </div>
        </div>
    )
}

export default activities