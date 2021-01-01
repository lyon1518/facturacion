import React from "react";

class form extends React.Component{
    
    formu(){
        const {form,data} = this.props
        switch (form) {
            case 'Editar General':
                return(
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="tipo">Tipo</label>
                                <input type="text" className="form-control" placeholder="Tipo" id="tipo"/>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-8 mt-20">
                            <div className="form-group">
                                <label htmlFor="razon">Razón social</label>
                                <input type="text" className="form-control" placeholder="Razón social" id="razon" defaultValue={data.RazonSocial}/>
                            </div>
                        </div>
                        <div className="col-md-4 mt-20">
                            <div className="form-group">
                                <label htmlFor="rfc">RFC</label>
                                <input type="text" className="form-control" placeholder="RFC" id="rfc" defaultValue={data.RFC}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-20">
                            <div className="form-group">
                                <label htmlFor="cfdi">Uso CFDI</label>
                                <input type="text" className="form-control" placeholder="Uso CFDI" id="cfdi"/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-20">
                            <div className="form-group">
                                <label htmlFor="pago">Condiciones de pago</label>
                                <input type="text" className="form-control" placeholder="Condiciones de pago" id="pago"/>
                            </div>
                        </div>
                        <div className="col-md-12 mt-20">
                            <div className="form-group">
                                <label htmlFor="instr">Instrucciones de Facturación</label>
                                <textarea className="form-control" placeholder="Instrucciones de Facturación" id="instr"/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-20">
                            <div className="form-group">
                                <label htmlFor="banco">Banco Cliente</label>
                                <input type="text" className="form-control" placeholder="Banco Cliente" id="banco"/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-20">
                            <div className="form-group">
                                <label htmlFor="cuenta">Numero de cuenta</label>
                                <input type="text" className="form-control" placeholder="Numero de cuenta" id="cuenta"/>
                            </div>
                        </div>
                    </div>
                )
            default:
                break;
        }
    }
    render(){
        return(
            <form className="p-20">
                {this.formu()}
                <hr/>
                <div className="row">
                    <div className="col-md-6 mt-20"></div>
                    <div className="col-md-6 mt-20 text-right">
                        <button className="btn btn-danger" onClick={this.props.cambio}>Cerrar</button>
                        <button className="btn btn-primary ml-2">Guardar</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default form