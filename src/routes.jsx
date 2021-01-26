import React from 'react';

import {Route, Switch} from 'wouter';
import Login from './components/pages/login';
import Criar from './components/pages/criarConta';
import Home from './components/pages/home';
import lives from './components/pages/lives/lives';
import filmes from './components/pages/filmes';
import erro404 from './components/pages/404'
import filmes_categoria from './components/pages/filmes_categoria'
import filme_info from './components/pages/filme_Info'

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/Criar-Conta" component={Criar}/>
      <Route path="/home" component={Home}/>
      <Route path="/lives" component={lives}/>
      <Route exact path="/filmes" component={filmes}></Route>
      <Route path="/filmes/:categoria" component={filmes_categoria}></Route>
      <Route component={erro404}></Route>
      <Route exact path="/filme"></Route><Route path="/filme/:id" component={filme_info}/>
    </Switch>
  )
}

export default Router;