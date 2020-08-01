import React,{Fragment, useContext} from 'react';
import Navbar from './Componemts/layouts/Navbar';
import Search from './Componemts/Search';
import {BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import Users from './Componemts/Users';
import About from "./Componemts/About"
import User from "./Componemts/User";
import GithubState from "./context/GithubState";
const App = ()=> { 
    return (
      <GithubState>
      <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" render={(props)=>
            <Fragment>
            <Search />
             <Users  />
          </Fragment>
          } />
          <Route  exact path="/about" component={About} />
          <Route exact path="/user/:name" render={(props)=>
                <User {...props}  />
          } />
        </Switch>
        </div>
      </Fragment>
      </Router>
      </GithubState>
    );
}
export default App;
