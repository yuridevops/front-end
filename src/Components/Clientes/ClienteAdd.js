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
import qs from 'qs';


export default function ClienteAdd() {
  const [open, setOpen] = React.useState(false);
  const [nome, setNome] = React.useState("")
  const [dataNascimento, setDataNascimento] = React.useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNome = (event) => {
    setNome(event.target.value);
  }


  const handleData = (event) => {
    setDataNascimento(event.target.value);
  }

  const addCliente = async () => {
    
    let data = {
      nome: nome,
      dataNascimento: dataNascimento
    }
    console.log(data)
    
    await axios({
      method: 'post',
      url: 'http://localhost:4000/clientes',
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
        <DialogTitle id="form-dialog-title">Cadastrar Cliente</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            type="name"
            fullWidth
            onChange={handleNome}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="dataNascimento"
          
            type="date"
            fullWidth
            onChange={handleData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCliente} color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}