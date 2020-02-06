import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom'




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Front-End
              </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left">
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <Link to="/pedidos">
                        <ListItem button key = "Pedidos" color="inherit">
                            <ListItemIcon> <InboxIcon /> </ListItemIcon>
                            <ListItemText primary="Pedidos" />
                        </ListItem>
                    </Link>
                    <Link to="/produtos">
                        <ListItem button key = "Produtos" color="inherit"  >
                            <ListItemIcon> <InboxIcon /> </ListItemIcon>
                            <ListItemText primary="Produtos" />
                        </ListItem>
                    </Link>
                    <Link to="/clientes"  color="inherit">
                        <ListItem button key = "Clientes" >
                            <ListItemIcon> <InboxIcon /> </ListItemIcon>
                            <ListItemText primary="Cliente" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    )
}
