import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import Paginador from "../components/paginador";
import Apis from "../hooks/apis";

const header = {
    head1:[
        { id: 'numero', label: 'Numero', minWidth: 80, align: 'center'},
        { id: 'titulo', label: 'Titulo', minWidth: 120, align: 'center'},
        { id: 'prioridad', label: 'Prioridad', minWidth: 80, align: 'center'},
        { id: 'departamento', label: 'Departamento', minWidth: 120, align: 'center'},
        { id: 'fecha', label: 'Fecha', minWidth: 120, align: 'center'},
        { id: 'acciones', label: 'Acciones', minWidth: 120, align: 'center'},
        { id: 'status', label: 'Status', minWidth: 100, align: 'center'},
    ]
}
class soporte extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>Soporte</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-20">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="asunto">Asunto</label>
                                        <input type="text" className="form-control" id="asunto" placeholder="Escribe el asuto del problema"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="prioridad">Prioridad</label>
                                        <select className="form-control">
                                            {/* <option disabled>Selecciona la prioridad</option> */}
                                            <option value="alta">Alta</option>
                                            <option value="media">Media</option>
                                            <option value="baja">Baja</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text1">Describe detalladamente el problema a resolver</label>
                                    <textarea 
                                        className="form-control" 
                                        placeholder="Describe detalladamente el problema"
                                        name="insidencia"
                                        id="text1"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adjunto">Adjunta un archivo para mas detalles</label>
                                    <input 
                                        type="file"
                                        className="form-control" 
                                        placeholder="Adjunta un archivo imagen o documento para mas detalles"
                                        name="adjunto"
                                        id="adjunto"
                                    />
                                </div>
                                <button className="btn btn-primary">Crear</button>
                                <button className="btn btn-danger ml-2 oculto">Cerrar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <Paginador data='Mis tickets' headers={header.head1} body={Apis.tickets}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default soporte