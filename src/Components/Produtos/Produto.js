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
import ProdutoAdd from './ProdutoAdd'
import ProdutoDelete from './ProdutoDelete'
import ProdutoEdit from './ProdutoEdit'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


export default function Produto() {
  const classes = useStyles();
  const [produtos, setProdutos] = useState([])

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
        <IconButton aria-label="edit">
          <ProdutoEdit descricao={produto.descricao} id={produto._id} preco={produto.preco} />
        </IconButton>
        <IconButton aria-label="delete">
          <ProdutoDelete id={produto._id} />
        </IconButton>
      </ListItem>
    )
  })
  return (
    <div className={classes.root}>
      <Nav />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box flexDirection="row-reverse" display="flex">
          <Fab color="primary" aria-label="add">
            <ProdutoAdd />
          </Fab>
        </Box>
        <List component="nav" aria-label="main mailbox folders">
          {produtosMap}
        </List>
      </main>
    </div>
  );
}
