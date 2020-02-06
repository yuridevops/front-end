import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
import ClienteSelect from './ClienteSelect';
import ListaProduto2 from './ListaProduto2'



export default function PedidoAdd() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPedido = async () => {
    
    let data = {
      open: true
    }
  
    console.log(data)
    
    await axios({
      method: 'post',
      url: 'http://localhost:4000/pedidos',
      data: data,
    }).then(() => {

    }).catch((e) => {

    })
    setOpen(false);
    window.location.reload(false)
  }



  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastrar Pedido</DialogTitle>
        <DialogContent>
          
        </DialogContent>
        <ClienteSelect/>
        <DialogContent>
        <ListaProduto2/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addPedido} color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}