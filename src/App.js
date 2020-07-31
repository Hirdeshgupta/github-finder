import React,{Fragment, useState} from 'react';
import Navbar from './Componemts/layouts/Navbar';
import Search from './Componemts/Search';
import {BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import axios from "axios"
import Users from './Componemts/Users';
import About from "./Componemts/About"
import User from "./Componemts/User"
const App = ()=> {
  const [users,setUsers] = useState([]);
  const [cleared,setCleared] = useState(true);
  const getUser = async (query)=>{
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setCleared(false);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }
  const clearEvent = ()=>{
    setUsers([]);
    setCleared(true);
  }
    return (
      <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" render={(props)=>
              <Fragment>
                <Search getUser ={getUser} clearEvent ={clearEvent} cleared={cleared}/>
              <Users users={users} />
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
    );
}
export default App;
