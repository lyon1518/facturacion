import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faUserCog, faCheckSquare, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Apis from "../hooks/apis";

function soporte(props) {
    const {fondo,icon,title} = props.data
    let {count} = props.data
    function icons() {
        switch (icon) {
            case 'faTasks':
                count = Apis.NAsig.length
                return(
                    <FontAwesomeIcon icon={faTasks} className="m-auto fa-3x"/>
                )
            case 'faUserCog':
                count = Apis.Asig.length
                return(
                    <FontAwesomeIcon icon={faUserCog} className="m-auto fa-3x"/>
                )
            case 'faCheckSquare':
                count = Apis.Resueltos.length
                return(
                    <FontAwesomeIcon icon={faCheckSquare} className="m-auto fa-3x"/>
                )
            case 'faTimesCircle':
                count = Apis.NResueltos.length
                return(
                    <FontAwesomeIcon icon={faTimesCircle} className="m-auto fa-3x"/>
                )
            default:
                break;
        }
    }
    return(
        <button className={"card text-white pointer w-100 bg-"+fondo} onClick={()=>props.actividad(title)}>
            <div className="centrar m-auto">
                {icons()}
                <div className="ml-4">
                    <strong>{title}</strong>
                    <h2 className="text-center">{count}</h2>
                </div>
            </div>
        </button>
    )
}

export default soporte