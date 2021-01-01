import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function loader() {
    return(
        <div className="loader">
            <FontAwesomeIcon icon={faSpinner} className="spinner"/>
            <span className="ml-2">Cargando</span>
        </div>
    )
}

export default loader