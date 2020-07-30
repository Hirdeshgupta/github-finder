import React,{Fragment} from 'react';
import Navbar from './Componemts/layouts/Navbar';
import Search from './Componemts/Search';
import {BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import axios from "axios"
import Users from './Componemts/Users';
import About from "./Componemts/About"
import User from "./Componemts/User"
class  App extends React.Component {
  state={
    users:[],
    cleared:true
  }
  getUser = async (query)=>{
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({users:response.data.items,cleared:false})
    } catch (error) {
      console.error(error);
    }
  }
  clearEvent = ()=>{
    this.setState({
      users:[],
      cleared:true,
    })
  }
  render(){
    return (
      <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" render={(props)=>
              <Fragment>
                <Search getUser ={this.getUser} clearEvent ={this.clearEvent} cleared={this.state.cleared}/>
              <Users users={this.state.users} />
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
}
export default App;
