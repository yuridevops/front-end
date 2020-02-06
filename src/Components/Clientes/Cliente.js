import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import axios from 'axios'
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from '../../Nav'
import ClienteAdd from './ClienteAdd'
import ClienteDelete from './ClienteDelete'
import IconButton from '@material-ui/core/IconButton';
import ClienteEdit from './ClienteEdit'


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


export default function Cliente() {
  const classes = useStyles();
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    await axios.get('http://localhost:4000/clientes/getall').then(res => {
      setClientes(res.data)
      console.log('deu certo')
    }).catch(err => {
      console.log('erro')
    })
  }


  const clientesMap = clientes.map(cliente => {
    return (

      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={cliente.nome} secondary={"aniversario: " + cliente.dataNascimento} />
        <IconButton aria-label="edit">
          <ClienteEdit id={cliente._id} nome={cliente.nome} dataNascimento={cliente.dataNascimento} />
        </IconButton>
        <IconButton aria-label="delete">
          <ClienteDelete id={cliente._id} />
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
          <ClienteAdd />
        </Box>
        <List component="nav" aria-label="main mailbox folders">
          {clientesMap}
        </List>
      </main>
    </div>
  );
}
