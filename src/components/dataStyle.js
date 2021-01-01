import React from "react";

function dataStyle(props) {
    const {title,col,data} = props
    return(
        <div className={'mt-20 col-md-'+col}>
            <div className="centrar">
                <div className="infoT">{title}</div>
                <div className={data === ''?" ":"info"}>{data}</div>
            </div>
        </div>
    )
}

export default dataStyle