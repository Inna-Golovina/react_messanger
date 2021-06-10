import React, {useContext} from 'react';
import { Button, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
//import {Context} from "../index";
//import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {

  const user = true;

    return (
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Grid container justify={"flex-end"}>
            {user 
              ? <Button variant={"outlined"}>Выйти</Button>
              : <NavLink to={LOGIN_ROUTE}>
                  <Button variant={"outlined"}>Логин</Button>
                </NavLink>
            }
          </Grid>
    
        </Toolbar>
</AppBar>
    )
};

export default Navbar;
