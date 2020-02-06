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

export default function ProdutoEdit(props) {
    const [open, setOpen] = React.useState(false);
    const [descricao, setDescricao] = React.useState(props.descricao)
    const [preco, setPreco] = React.useState(props.preco)
    const [id, setId] = React.useState(props.id)

    const descricaoCopy = descricao
    const precoCopy = preco

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

    const editPreco = async () => {

        let data = {
            id: id,
            descricao: descricao,
            preco: preco
        }
        console.log(data)

        await axios({
            method: 'put',
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
            <IconButton aria-label="edit" onClick={handleClickOpen}>
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
                        value = {descricaoCopy}
                        fullWidth
                        onChange={handleDescricao}
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="dataNascimento"
                        value = {precoCopy}
                        type="name"
                        fullWidth
                        onChange={handlePreco}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={editPreco} color="primary">
                        Atualizar
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}