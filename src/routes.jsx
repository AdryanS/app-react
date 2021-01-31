import React from 'react';

import {Route, Switch, Redirect} from 'wouter';
import Login from './components/pages/login';
import Criar from './components/pages/criarConta';
import Home from './components/pages/home';
import lives from './components/pages/lives/lives';
import filmes from './components/pages/filmes';
import erro404 from './components/pages/404'
import filmes_categoria from './components/pages/filmes_categoria'
import filme_info from './components/pages/filme_Info'
import filme_play from './components/pages/play_filmes'

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/Criar-Conta" component={Criar}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/play">
      <Redirect to="/home"/>
      </Route>
      <Route exact path="/filme"/>
      <Route exact path="/filme/play" component={erro404}/>
      <Route path="/filme/play/:filme" component={filme_play}></Route>
      <Route path="/filme/info" component={erro404}/>
      <Route path="/filme/info/:id" component={filme_info}/>
      <Route path="/lives" component={lives}/>
      <Route exact path="/filmes" component={filmes} />
      <Route path="/filmes/:categoria" component={filmes_categoria} />
      <Route exact path="/series"/>
      <Route path="/series/:categoria"/>
      <Route exact path="/serie/play" component={erro404}/>
      <Route path="/serie/play/:filme"></Route>
      <Route path="/serie/info" component={erro404}/>
      <Route path="/serie/info/:id" />
    </Switch>
  )
}

export default Router;