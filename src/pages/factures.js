import React from "react";
import Subnav from "../components/subnav";
import Loader from "../components/loader";
import Paginador from "../components/paginador";
import Description from "../components/description";
import Proyects from "../pages/proyects";
import Soporte from "../pages/soporte";
import Axios from "axios";
import Url from "../hooks/url";
import Apis from "../hooks/apis";

const header = {
    head1:[
        { id: 'InvoiceID', label: 'ID Factura', minWidth: 170, align: 'center'},
        { id: 'InvoiceDate', label: 'Fecha Factura', minWidth: 170, align: 'center'},
        { id: 'CustomerName', label: 'Cliente', minWidth: 170, align: 'center'},
        { id: 'InvoiceTotal', label: 'Total', minWidth: 170, align: 'center'},
        { id: 'InvoicesStatus', label: 'Status', minWidth: 170, align: 'center'},
    ]
}
class appfeatured extends React.Component{
    constructor(){
        super();
        this.state={
            dataT:[],
            navData:[],
            page:"",
            api:"",
            ids:""
        }
        this.menu = this.menu.bind(this);
        this.dataDescription = this.dataDescription.bind(this);
    }
    
    componentDidMount(){
        // console.log(Apis.subFacturas);
        this.setState({navData:Apis.subFacturas.listNav})
        // Axios.get(Url.url+'/subnav/facturas')
        // .then(res=>{
        //     this.setState({navData:res.data.listNav})
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
    }
    menu(page,api){
        this.dataTable('invoices/account/1')
        // this.dataTable('invoices/1001')
        this.setState({api:api})
        this.setState({page:page})
    }
    dataTable(data){
        Axios.get(Url.url2+data)
        .then(res=>{
            this.setState({dataT:res.data.data.invoices})
            // console.log(this.state.dataT);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    dataDescription(page){
        this.setState({page:page})
    }
    paginator(){
        const {page,api,dataT} =this.state
        if (page !== '') {
            switch (page) {
                case "Facturas":
                    return(
                        <Paginador data={page} dataA={api} headers={header.head1} body={dataT} link="InvoiceID" dataDescription={this.dataDescription}/>
                    )
                case "detallado":
                    return(
                        <Description/>
                    )
                case "Proyectos":
                    return(
                        <Proyects/>
                    )
                case "Soporte":
                    return(
                        <Soporte/>
                    )
                default:
                    break;
            }
        }
    }
    render(){
        const {navData} =this.state
        if (navData.length === 0) {
            return(
                <Loader/>
            )
        }else{
            return(
                <div className="bg-gris">
                    <Subnav data={navData} menu={this.menu}/>
                    <div className="w-95 m-auto p-20">
                        {this.paginator()}
                    </div>
                </div>
            )
        }
    }
}

export default appfeatured