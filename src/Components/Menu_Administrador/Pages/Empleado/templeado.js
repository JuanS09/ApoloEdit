import React, {useEffect} from 'react'
import { styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDocs, collection } from '@firebase/firestore';
import { fs } from '../../../../firebase';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Button, ButtonGroup} from '@material-ui/core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function TEmpleados() {
  const [lista, setlista] = React.useState([]);
  const arrays = []
  let obj;

  
  const listardatos = async () =>{
    const querySnapshot = await getDocs(collection(fs, "Empleados"));
    querySnapshot.forEach((doc) => {
      obj = doc.data()
      obj.id = doc.id
      arrays.push(obj)
      setlista(arrays)
// doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});
}
useEffect(() => {
    listardatos()
    }, [])

  return (
    
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 200 }} aria-label="TEmpleado">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">ID</StyledTableCell>  
            <StyledTableCell align="center">Cédula</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Apellidos</StyledTableCell>
            <StyledTableCell align="center">Dirección</StyledTableCell>
            <StyledTableCell align="center">Teléfono</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
        {lista?<>
          {lista.map((listardatos) => 
            <StyledTableRow key={listardatos.Cedula}>
              {console.log(listardatos)}
              <StyledTableCell align="justify">{listardatos.id}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Cedula}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Nombres}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Apellidos}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Dirección}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Teléfono}</StyledTableCell>
              <ButtonGroup>
                <Button align="center"><CreateOutlinedIcon/></Button>
                <Button align="center"><DeleteOutlinedIcon/></Button>
            </ButtonGroup>          
            </StyledTableRow>
            
            
          )}
          
          </>:'no hay datos'}
          
        </TableBody>
       
      </Table>
     
    </TableContainer>
    
  );
} 
