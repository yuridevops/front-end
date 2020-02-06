import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'

export default function ClienteEdit(props) {
    const [open, setOpen] = React.useState(false);
    const [nome, setNome] = React.useState(props.nome)
    const [dataNascimento, setDataNascimento] = React.useState(props.dataNascimento)
    const [id, setId] = React.useState(props.id)

    const nomeCopy = nome
    const dataNascimentoCopy = dataNascimento

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

    const editCliente = async () => {

        let data = {
            id: id,
            nome: nome,
            dataNascimento: dataNascimento
        }
        console.log(data)

        await axios({
            method: 'put',
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
            <IconButton aria-label="delete" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Atualizar Cliente</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nome"
                        label="Nome"
                        type="name"
                        value = {nomeCopy}
                        fullWidth
                        onChange={handleNome}
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="dataNascimento"
                        value = {dataNascimentoCopy}
                        type="date"
                        fullWidth
                        onChange={handleData}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={editCliente} color="primary">
                        Atualizar
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}