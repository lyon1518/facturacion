import React from "react";
import Apis from "../hooks/apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import Pop from "../components/pop";

class proyects extends React.Component{
    constructor(){
        super();
        this.state={
            task:[],
            active:false,
            dataPop:{}
        }
        this.create = this.create.bind(this);
        this.activePop = this.activePop.bind(this);
    }
    componentDidMount(){
        this.setState({task:Apis.proyectos})
    }
    add(){
        var container = document.getElementById('containerAdd')
        var pon = document.getElementById('add')
        var formA = document.getElementById('formA')
        container.classList.toggle('addList')
        container.classList.toggle('card')
        pon.classList.toggle('oculto')
        formA.classList.toggle('oculto')
    }
    create(){
        let inicial = this.state.task
        let nombre = document.getElementById('name')
        let obj = {}
        obj.nombre = nombre.value
        obj.array = []
        inicial.unshift(obj)
        this.setState({task:inicial})
    }
    activeTask(data){
        let area = document.getElementById(data)
        area.classList.toggle('oculto')
    }
    addTask(data,id,cerrar){
        let obj = {}
        let inicial = this.state.task
        let textarea = document.getElementById(id)
        obj.title=textarea.value
        obj.description=''
        obj.active=''
        // inicial[data].array.unshift(obj)
        inicial[data].array.push(obj)
        this.setState({task:inicial})
        this.activeTask(cerrar)
    }
    vista(data,indice){
        if (typeof data === 'string') {
            return(
                <div className="addList" id="containerAdd">
                    <div className="plus" id="add" onClick={this.add}>
                        <FontAwesomeIcon icon={faPlus}/>
                        <span className="ml-2">{data}</span>
                    </div>
                    <div className="card-body oculto" id="formA">
                        <input type="text" placeholder="Titulo de lista" className="form-control" id="name"/>
                        <button className="btn btn-danger mt-10" onClick={this.add}>Cancelar</button>
                        <button className="btn btn-success ml-2 mt-10" onClick={this.create}>Crear</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <strong>{data.nombre}</strong>
                    </div>
                    <div className="card-body">
                        {data.array.map((e,index)=>{
                            return(
                                <div className="card bg-gris mt-20" key={"task"+index}>
                                    <div className="card-head bg-dark">
                                        <div className="status bg-success" title="Activo"></div>
                                    </div>
                                    <div className="card-body row">
                                        <div className="col-md-8 title-task">
                                            <span>{e.title}</span>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <div className="pointer" onClick={()=>this.activePop(e)}>
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="oculto mt-20" id={"area-"+data.nombre}>
                            <textarea className="form-control" id={"textarea-"+data.nombre} placeholder="Ingresa el titulo de la tarea"></textarea>
                            <button className="btn btn-danger mt-10" onClick={()=>this.activeTask("area-"+data.nombre)}>Cancelar</button>
                            <button className="btn btn-success ml-2 mt-10" onClick={()=>this.addTask(indice,"textarea-"+data.nombre,"area-"+data.nombre)}>Crear</button>
                        </div>
                        <div className="pointer p-2" onClick={()=>this.activeTask("area-"+data.nombre)}>
                            <FontAwesomeIcon icon={faPlus}/>
                            <span className="ml-2">Añadir tarea</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
    popup(){
        const { dataPop } = this.state
        if (this.state.active) {
            return(
                <Pop activePop={this.activePop} poptype='task' title={dataPop.title} data={dataPop}/>
            )
        }
    }
    activePop(data){
        const { active } = this.state
        this.setState({active:!active})
        this.setState({dataPop:data})
    }
    render(){
        const { task } = this.state
        return(
            <div>
                {this.popup()}
                <h1>Proyectos</h1>
                <div className="row">
                    {
                        task.map((e,index)=>{
                            return(
                                <div className="col-md-3 mt-10" key={'lista'+index}>
                                    {this.vista(e,index)}   
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default proyects