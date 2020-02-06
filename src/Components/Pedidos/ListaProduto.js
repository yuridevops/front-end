import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import axios from 'axios'
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from '../../Nav'
import IconButton from '@material-ui/core/IconButton';
import ProdutoAdd from '../Produtos/ProdutoAdd'
import ProdutoDelete from '../Produtos/ProdutoDelete'
import ProdutoEdit from '../Produtos/ProdutoEdit'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        
        backgroundColor: theme.palette.background.default,
        
    },
    dialog: {
        
     
    
    }
}));

export default function ListaProduto() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [produtos, setProdutos] = React.useState([])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={produto.descricao} secondary={"preco: " + produto.preco} />
                <IconButton aria-label="delete">
                    <ProdutoDelete id={produto._id} />
                </IconButton>
            </ListItem>
        )
    })


    return (
        <div>
            <Button color="primary" aria-label="add" onClick={handleClickOpen}>
                Adicionar Produto
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
                <DialogTitle id="form-dialog-title">Cadastrar Produto</DialogTitle>
                <DialogContent>
                    <div className={classes.root}>
                        <Nav />
                        <CssBaseline />
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <List component="nav" aria-label="main mailbox folders">
                                {produtosMap}
                            </List>
                        </main>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                 </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}