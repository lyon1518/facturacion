import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Pop from "./pop";
import DataStyle from "./dataStyle";

class card extends React.Component{
    constructor(){
        super();
        this.state={
            active:false
        }
        this.popActive = this.popActive.bind(this);
        this.change = this.change.bind(this);
    }
    Body(){
        const {data} = this.props
        return(
            <div className="row">
                {
                    data.titles.map((e,index)=>{
                        return(
                            <DataStyle title={e} col={data.colum[index]} data={data.general[index]} key={"info"+index}/>
                        )
                    })
                }
            </div>
        )
    }
    popup() {
        const {pop} = this.props
        if (pop === undefined) {
            return(
                <div className="edit" onClick={this.change}>
                {/* <div className="edit"> */}
                    <FontAwesomeIcon icon={faEdit}/>
                </div>
            )
        }else{
    
        }
    }
    popActive(){
        const {title,data} = this.props
        const {active} = this.state 
        if (active) {
            return(
                <Pop title={"Editar "+title} change={this.change} data={data} poptype="form"/>
            )
        }
    }
    change(e){
        const {active} = this.state 
        this.setState({active:!active})
    }
    render(){
        const { title } = this.props
        return(
            <div className="card w-100 mt-40">
                {this.popActive()}
                <div className="card-head p-2 bg-primary text-white">
                    <div className="row">
                        <div className="col-md-6"><strong>{title}</strong></div>
                        <div className="col-md-6 text-right">
                            {this.popup()}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {this.Body()}
                </div>
            </div>
        )
        
    }
}

export default card