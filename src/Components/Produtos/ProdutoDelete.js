import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'

export default function ClienteDelete(props) {
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState(props.id)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    axios.defaults.headers.common = { "Content-Type": "application/json" }

    const deleteCliente = async () => {
        await axios.delete('http://localhost:4000/produtos', {
            data: {
                id: id
            }
        }).then(res => {
            console.log("deletou")
            console.log(props.id)
        }).catch(err => {
            console.log('erro')
        })
        setOpen(false);
        window.location.reload(false)
    }

    return (
        <div>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Deletar Produto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deseja mesmo deletar este Produto ?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button onClick={deleteCliente} color="primary">
                        Deletar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}