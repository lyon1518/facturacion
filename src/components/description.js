import React from "react";
import Axios from "axios";
import Url from "../hooks/url";
import Loader from "../components/loader";
import Pop from "../components/pop";
import Card from "./card";
import Paginador from "./paginador";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileAlt } from "@fortawesome/free-solid-svg-icons";

class description extends React.Component{
    constructor(){
        super();
        this.state={
            dataD:{},
            titles:[
                { id: 'id', label: 'ID', minWidth: 170, align: 'center'},
                { id: 'InvoiceID', label: 'Id factura', minWidth: 170, align: 'center'},
                { id: 'Fecha', label: 'Fecha', minWidth: 170, align: 'center'},
                { id: 'Cantidad', label: 'Cantidad', minWidth: 170, align: 'center'},
                { id: 'Status', label: 'Status', minWidth: 170, align: 'center'},
                { id: 'FileURL', label: 'Comprobante', minWidth: 170, align: 'center'},
            ]
        }
        this.activePop = this.activePop.bind(this);
    }
    componentDidMount(){
        let id = window.location.href
        let array = id.split('/')
        let total = id.split('/').length
        id = array[total-1]
        // console.log(Url.url2+/invoices/+id);
        Axios.get(Url.url2+/invoices/+id)
        .then(res=>{
            this.setState({dataD:res.data.data})
            // console.log(this.state.dataD)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    popup(){
        const { dataPop } = this.state
        if (this.state.active) {
            return(
                <Pop activePop={this.activePop} poptype='pdf' title='Comprobante' data={dataPop}/>
            )
        }
    }
    activePop(data){
        const { active } = this.state
        this.setState({active:!active})
        this.setState({dataPop:data})
    }
    render(){
        const {dataD,titles} = this.state
        let construc = []
        if (dataD.Emisor !== undefined) {
            const {RazonSocial,RFC,Regimen,Address} = dataD.Emisor
            const {UnidadServicioSat,codigoSat,codigo,UnidadServicio,Nombre,cantidad,Precio,Descuento,Monto} = dataD.items[0]
            construc = [
                {
                    title:'General',
                    titles:['Folio fiscal:', '', 'Fecha creación:', 'Fecha emisión:', 'Fecha timbre:', 'Ultima actualización:', 'Creada por:', 'Status:', 'Descuento:', 'IVA', 'IVA %:', 'Subtottal:', 'Total:'],
                    general:[dataD.FolioFiscal, '', dataD.FechaCreacion, dataD.FechaEmision, dataD.FechaTimbre, dataD.UltimaActualizacion, dataD.CreadaPor, dataD.Status, dataD.Descuento+' '+dataD.Moneda, dataD.IvaMonto+' '+dataD.Moneda, dataD.IvaPorciento+' '+dataD.Moneda, dataD.Subtotal+' '+dataD.Moneda, dataD.TotalTotal+' '+dataD.Moneda],
                    colum:['6', '6', '3', '3', '3', '3', '6', '6', '3', '3', '3', '3', '3']
                },
                {
                    title:'Emisor',
                    titles:['Razón social:','RFC:','Regimen:','Dirección:'],
                    general:[RazonSocial,RFC,Regimen,Address.AddressStreet+', '+Address.AddressNeighborhood+', '+Address.AddressCity+', '+Address.AddressState+', '+Address.AddressZipCode],
                    colum:['4','4','4','12']
                },
                {
                    title:'Cliente',
                    titles:['Razón social:','RFC:','Contacto:','Dirección:'],
                    general:[dataD.Cliente.RazonSocial,dataD.Cliente.RFC,dataD.Cliente.ContactoNombre+' '+dataD.Cliente.ContactoApellido,dataD.Cliente.Address.AddressStreet+', '+dataD.Cliente.Address.AddressNeighborhood+', '+dataD.Cliente.Address.AddressCity+', '+dataD.Cliente.Address.AddressState+', '+dataD.Cliente.Address.AddressZipCode],
                    colum:['4','4','4','12']
                },
                {
                    title:'Productos y servicios',
                    titles:['U.S.SAT:','','C.SAT:','Codigo:','Servicio:','Nombre:','Cantidad:','Precio:','Descuento:','Monto:'],
                    general:[UnidadServicioSat,'',codigoSat,codigo,UnidadServicio,Nombre,cantidad,Precio,Descuento,Monto],
                    colum:['2','8','2','3','3','3','3','4','4','4']
                },
            ] 
        }
        if (Object.keys(dataD).length === 0) {
            return(
                <Loader/>
            )
        }
        else{
            return(
                <div>
                    {this.popup()}
                    <div className="buttons-float">
                        <a href={dataD.PDF} target="blank" className="btn btn-danger"><FontAwesomeIcon icon={faFilePdf}/><strong className="ml-2">PDF</strong></a>
                        <a href={dataD.XML} className="btn btn-warning text-white ml-20"><FontAwesomeIcon icon={faFileAlt}/><strong className="ml-2">XML</strong></a>
                    </div>
                    <h1 className="mt-20">{dataD.Cliente.RazonSocial}</h1>
                    <div className="row mb-2">
                        {
                            construc.map((e,indice)=>{
                                return(
                                    <Card title={e.title} data={e} key={'card'+indice}/>   
                                )
                            })
                        }
                    </div>
                    <Paginador data='Pagos' headers={titles} body={dataD.Pagos} activePop={this.activePop}/>
                </div>
            )
        }
    }
}

export default description