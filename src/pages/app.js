import React from "react";
import Navbar from "../components/navbar";
// import Subnav from "../components/subnav";
import Router from "../router/router";

class app extends React.Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                <div className="bg-gris w-100 m-auto hvh-85">
                    <Router/>
                </div>
                <div className="w-95 m-auto p-7">
                    <div className="row">
                        <div className="col-md-6 text-white text-left">Terminos</div>
                        <div className="col-md-6 text-white text-right">Autor de site</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default app