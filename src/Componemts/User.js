import React, { Component ,Fragment} from 'react'
import {Link } from "react-router-dom"
import axios from "axios"
export class User extends Component {
    state={
        userDetails:{}
    }
    componentDidMount(){
        this.getDetails();
    }
    getDetails= async()=>{
        const {match:{params}} = this.props;
        try {
            const response = await axios.get(`https://api.github.com/users/${params.name}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            this.setState({userDetails:response.data})
          } catch (error) {
            console.error(error);
          }
    }
    render() {
        return (
            <Fragment>
                <div className="row mt-4 align-ite" >

                <div className="col-5 col-lg-2">
                <Link type="button" to="/" class="btn btn-primary">Go To Search</Link>
                </div>
                <div className=" col-4 col-md-2">
                    <h5>Hirable {this.state.userDetails.hireable ? <i className="fas fa-check" style={{color:"green"}}></i> : <i className="fas fa-times" style={{color:"red"}}></i>}</h5>
                </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card border-light mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="row justify-content-center">
                                    <div className="col-4">
                                    <img src={this.state.userDetails.avatar_url}  className="card-img-top" alt="..." style={{borderRadius:"50%",height:150,width:150}}></img>
                                    </div>
                                    </div> 
                                        <h2 className="text-center mt-2">{this.state.userDetails.name ? this.state.userDetails.name :this.state.userDetails.login}</h2>
                                        { this.state.userDetails.location && <p className="text-center mt-0" >{this.state.userDetails.location}</p>} 
                                </div>
                                <div className="col-6">
                                <h4 className="card-title">Light card title</h4>
                            <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                    <div className="card border-light mb-3">
                        <div className="card-body">
     
                                <h4 className="card-title">Light card title</h4>
                            <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
