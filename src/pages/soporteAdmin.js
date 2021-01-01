import React from "react";
import Suport from "../components/suport";
import Activities from "../components/activities";
import Pop from "../components/pop";
import Apis from "../hooks/apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";

class soporte extends React.Component{
    constructor(){
        super();
        this.state={
            Act:'No asignados',
            color:'warning',
            active:false,
            dataPop:{}
        }
        this.actividad = this.actividad.bind(this);
        this.activePop = this.activePop.bind(this);
    }
    actividad(data){
        this.setState({Act:data})
        console.log(data);
        switch (data) {
            case 'No asignados':
                this.setState({color:'warning'})
                break;
            case 'En curso':
                this.setState({color:'primary'})
                break;
            case 'Resueltos':
                this.setState({color:'success'})
                break;
            case 'No Resueltos':
                this.setState({color:'danger'})
                break;
            default:
                break;
        }
        setTimeout(() => {
            console.clear()
        }, 500);
    }
    popup(){
        const { dataPop } = this.state
        if (this.state.active) {
            return(
                <Pop activePop={this.activePop} poptype={dataPop} title={dataPop} data={dataPop}/>
            )
        }
    }
    activePop(data){
        const { active } = this.state
        this.setState({active:!active})
        this.setState({dataPop:data})
    }
    render(){
        const {Act,color} = this.state
        return(
            <div className="container-fluid">
                {this.popup()}
                <div className="row">
                    <div className="col-md-6">
                        <h1>Soporte</h1>
                    </div>
                    <div className="col-md-6 text-right centrar">
                        <div className="ml-auto">
                            <button type="button" className="btn btn-outline-secondary cir" onClick={()=>this.activePop('Crear usuario')}>
                                <FontAwesomeIcon icon={faUserTie}/>
                                <span className="toltip bg-secondary">Agregar Usuario</span>
                            </button>
                            <button type="button" className="btn btn-outline-success ml-4 cir" onClick={()=>this.activePop('Crear cliente')}>
                                <FontAwesomeIcon icon={faUser}/>
                                <span className="toltip bg-success">Agregar Cliente</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Apis.icons.map((e,index)=>{
                        return(
                            <div className="col-md-3" key={"suport"+index}>
                                <Suport data={e} actividad={this.actividad}/>
                            </div>                
                        )
                    })}
                </div>
                <Activities vista={Act} color={color}/>
            </div>
        )
    }
}

export default soporte