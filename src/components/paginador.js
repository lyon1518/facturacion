import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Loader from "../components/loader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEye } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { headers,body,data,link,dataDescription,activePop } = props
  if (body.length > 0) {
    return (
      <div className="w-100">
        <div className="row">
          <div className="col-md-5 centrar">
            <h2>{data}</h2>
          </div>
          <div className="col-md-7 centrar">
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={body.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              className="ml-auto"
            />
          </div>
        </div>
        <Paper className={'mt-20'+classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {headers.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="bg-success text-white"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {body.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={'row'+index}>
                      {headers.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} className={column.id}>
                            {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                            {link === column.id ? 
                            <Link to={'/facturas/clientes/detallado/'+value} onClick={()=>dataDescription('detallado',value)}>{value}</Link> : 
                            column.id === 'FileURL' ?  
                            <div><a href={value} target="blank" className="btn btn-danger"><FontAwesomeIcon icon={faFilePdf}/></a> <button className="btn btn-success ml-2" onClick={()=>activePop(value)}><FontAwesomeIcon icon={faEye}/></button></div>:
                            <span className={value.length < 6 ? 'prio '+value:''}>{value}</span>}
                            {/* {btn1 === undefined && btn1 === true && value === '' ?'boton':'no boton'} */}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    ) 
  }
  else{
    return(
      <Loader/>
    )
  }
}
