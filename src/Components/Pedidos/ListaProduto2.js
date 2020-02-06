import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';


function SimpleDialog(props) {

    const { onClose, selectedValue, open } = props;
    const [produtos, setProdutos] = React.useState([])

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        await axios.get('http://localhost:4000/produtos/getall').then(res => {
            setProdutos(res.data)
            console.log('deu certo')
        }).catch(err => {
            console.log('erro')
        })
    }

    const produtosMap = produtos.map(produto => {
        return (
            <ListItem button onClick={() => handleListItemClick(produto.descricao)} key={produto._id}>
                <ListItemText primary={produto.descricao} secondary={"preco: " + produto.preco} />
            </ListItem>
        )
    })

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <List>
                {produtosMap}
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("Nenhum produto selecionado");
    const [produtos, setProdutos] = React.useState([])


    const handleProdutos = () => {
        produtos.push(selectedValue)
        console.log(produtos)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Selecionar Produto
             </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}