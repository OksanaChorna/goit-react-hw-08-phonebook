import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

const AppBarComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar id="toolbar-menu">
            <Typography
              variant="h6"
              color="inherit"
              className={classes.title}
              component={NavLink}
              exact
              to="/"
            >
              Main
            </Typography>
            <Button color="inherit" component={NavLink} exact to="/register">
              Registration
            </Button>
            <Button color="inherit" component={NavLink} exact to="/login">
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppBarComp;
