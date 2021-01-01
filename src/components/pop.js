import React from "react";
import Form from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faList, faUser, faTags, faCheckSquare, faClock, faTimesCircle, faFilePdf, faFile } from "@fortawesome/free-solid-svg-icons";

function pop(props) {
    const {title,change,data,poptype,activePop} = props
    function cambio(e){
        e.preventDefault();
        change()
    }
    function vista() {
        switch (poptype) {
            case 'pdf':
                // console.log(data);+{ñ,}
                return(
                    <div>
                        <embed src={data} type="application/pdf" width="100%" className="vh-70"/>
                        <div className="popAct bg-secondary">
                            <div className="ml-auto">
                                <a className="btn btn-danger" href={data}>
                                    <FontAwesomeIcon icon={faFilePdf}/>
                                    <span className="ml-2">DESCARGA PDF</span>
                                </a>
                                <a className="btn btn-warning ml-2" href="#/">
                                    <FontAwesomeIcon icon={faFile}/>
                                    <span className="ml-2">DESCARGA XML</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            case 'Crear usuario':
                return(
                    <div>
                        <h1>usuario</h1>
                        <div className="popAct bg-secondary">
                            <div className="ml-auto">
                                <button className="btn btn-danger" onClick={()=>activePop()}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                )
            case 'Crear cliente':
                return(
                    <div>
                        <h1>Cliente</h1>
                        <div className="popAct bg-secondary">
                            <div className="ml-auto">
                                <button className="btn btn-danger" onClick={()=>activePop()}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                )
            case 'form':
                return(
                    <Form form={title} cambio={cambio} data={data}/>
                )
            case 'task':
                return(
                    <div>
                        <div className="row">
                            <div className="col-md-8">
                                <div>
                                    <strong className="centrar mt-10">
                                        <FontAwesomeIcon icon={faBars}/>
                                        <span className="ml-2">Descripcion</span>
                                    </strong>
                                    <textarea className="form-control mt-10" placeholder="Añadir descripción"></textarea>
                                </div>
                                <div>
                                    <strong className="centrar mt-10">
                                        <FontAwesomeIcon icon={faList}/>
                                        <span className="ml-2">Actividad</span>
                                    </strong>
                                    <input type="text" className="form-control mt-10" placeholder="Añadir actividad"/>
                                </div>
                                
                            </div>
                            <div className="col-md-4">
                                AÑADIR TARJETA
                                <button className="btn btn-outline-secondary mt-2 w-100">
                                    <FontAwesomeIcon icon={faUser}/>
                                    <span className="ml-2">Miembros</span>
                                </button>
                                <button className="btn btn-outline-secondary mt-2 w-100">
                                    <FontAwesomeIcon icon={faTags}/>
                                    <span className="ml-2">Etiquetas</span>
                                </button>
                                <button className="btn btn-outline-secondary mt-2 w-100">
                                    <FontAwesomeIcon icon={faCheckSquare}/>
                                    <span className="ml-2">Checklist</span>
                                </button>
                                <button className="btn btn-outline-secondary mt-2 w-100">
                                    <FontAwesomeIcon icon={faClock}/>
                                    <span className="ml-2">Vencimiento</span>
                                </button>
                            </div>
                        </div>
                        <div className="popAct bg-secondary">
                            <div className="ml-auto">
                                <button className="btn btn-danger" onClick={()=>activePop()}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                )
            default:
                break;
        }
    }
    return(
        <div className="pop centrar">
            <div className="card m-auto w-50 ov-auto vh-90">
                <div className="card-head p-2 bg-secondary text-white stiky">
                    <strong>{title}</strong>
                    <div className="close text-white" onClick={()=>activePop()}>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                </div>
                <div className="card-body">
                    {vista()}
                </div>
            </div>
        </div>
    )
}

export default pop