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



export default function ProdutoAdd() {
  const [open, setOpen] = React.useState(false);
  const [descricao, setDescricao] = React.useState("")
  const [preco, setPreco] = React.useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDescricao = (event) => {
    setDescricao(event.target.value);
  }


  const handlePreco = (event) => {
    setPreco(event.target.value);
  }

  const addProduto = async () => {
    
    let data = {
      descricao: descricao,
      preco: preco
    }
    console.log(data)
    
    await axios({
      method: 'post',
      url: 'http://localhost:4000/produtos',
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
        <DialogTitle id="form-dialog-title">Cadastrar Produto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="descricao"
            label="Descricao"
            type="name"
            fullWidth
            onChange={handleDescricao}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="preco"
            label="Preco"
            type="name"
            fullWidth
            onChange={handlePreco}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addProduto} color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}