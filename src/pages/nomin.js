import React from "react";
import Subnav from "../components/subnav";
import Loader from "../components/loader";
import Axios from "axios";
import Url from "../hooks/url";

class appNomin extends React.Component{
    constructor(){
        super();
        this.state={
            navData:[]
        }
    }
    componentDidMount(){
        Axios.get(Url.url+'/subnav/nomina')
        .then(res=>{
            this.setState({navData:res.data.listNav})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
        const {navData} =this.state
        if (navData.length === 0) {
            return(
                <Loader/>
            )
        }else{
            return(
                <div className="bg-white">
                    <Subnav data={navData}/>
                    <h1>Nominas</h1>
                </div>
            )
        }
    }
}

export default appNomin