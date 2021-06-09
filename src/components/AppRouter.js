//import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
//import {privateRoutes, publicRoutes} from "../routes";
//import {useAuthState} from "react-firebase-hooks/auth";
//import {Context} from "../index";

const AppRouter = () => {
  const user = true;

  return user ?
    (
      <Switch>
        {privateRoutes.map(({path, Componert}) =>
          <Route path={path} component={Componert} exact={true}/>
        )}
        <Redirect to={CHAT_ROUTE} />
      </Switch>
    )
    :
    (
      <Switch>
        {publicRoutes.map(({path, Componert}) =>
          <Route path={path} component={Componert} exact={true}/>
        )}
        <Redirect to={LOGIN_ROUTE} />
      </Switch>

    )
}
export default AppRouter;
