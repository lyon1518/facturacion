import React from "react";
// import Axios from "axios";
// import Url from "../hooks/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "./loader";
import Apis from "../hooks/apis";
// import { Link } from "react-router-dom";

class navbar extends React.Component{
    constructor(){
        super();
        this.state={
            navData:{}
        }
    }
    componentDidMount(){
        // console.log(Apis);
        this.setState({navData:Apis.nav})

        // Axios.get(Url.url+'/nav')
        // .then(res=>{
        //     this.setState({navData:res.data})
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
    }
    render(){
        if (Object.keys(this.state.navData).length > 0) {
            const {listNav,user} = this.state.navData
            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark stiky">
                    {/* <Link className="navbar-brand" to="/">LOGO</Link> */}
                    <a className="navbar-brand" href="/">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {
                                listNav.map((e,index)=>{
                                    return(
                                        <li className="nav-item" key={"li"+index}>
                                            <a className="nav-link" href={e.link}>{e.item}</a>
                                            {/* <Link className="nav-link" to={e.link}>{e.item}</Link> */}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="text-white text-right">
                        <img src={user.avatar} alt="avatar" width="7%"/>
                        <span className="ml-2">{user.name} | </span>
                        <FontAwesomeIcon icon={faSignOutAlt} className="ml-2"/>
                    </div>
                </nav>
            )
        }else{
            return(
                <Loader/>
            )
        }
    }
}

export default navbar