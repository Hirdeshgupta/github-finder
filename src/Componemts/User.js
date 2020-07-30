import React, { Component ,Fragment} from 'react'
import {Link } from "react-router-dom"
import axios from "axios"
export class User extends Component {
    state={
        userDetails:{},
        repos:[]
    }
    componentDidMount(){
        this.getRepos();
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
    getRepos =async()=>{
        const {match:{params}} = this.props;
        try {
            const response = await axios.get(`https://api.github.com/users/${params.name}/repos?sort=created&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            this.setState({repos:response.data})
          } catch (error) {
            console.error(error);
          }
    }
    render() {
        const latestRepos = [];
        for(let i=0;i<5;i++){
            latestRepos.push(
                <div className="col-12">
                <div className="card border-light mb-3">
                    <h5 className="py-2 pl-2 "><a className="text-white" href={this.state.repos[0] && this.state.repos[i].html_url }>{this.state.repos[0] && this.state.repos[i].name }</a></h5>
                </div>
            </div>
            )
        } 
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
                                <div className="col-md-6">
                                    <div className="row justify-content-center">
                                    <div className="col-4">
                                    <img src={this.state.userDetails.avatar_url}  className="card-img-top" alt="..." style={{borderRadius:"50%",height:150,width:150}}></img>
                                    </div>
                                    </div> 
                                        <h2 className="text-center mt-2">{this.state.userDetails.name ? this.state.userDetails.name :this.state.userDetails.login}</h2>
                                        { this.state.userDetails.location && <p className="text-center mt-0" >{this.state.userDetails.location}</p>} 
                                </div>
                                <div className="col-md-6">
                                    {this.state.userDetails.login &&  <div><h4>Bio</h4><p >{this.state.userDetails.bio}</p></div>}
                                        <a href={this.state.userDetails.html_url} type="button" class="btn btn-primary">Visit Github Profile</a>
                                       <p className="mt-3"><strong>Username : </strong>{this.state.userDetails.login}</p>
                                       {this.state.userDetails.company && <p><strong>Company :</strong>{this.state.userDetails.company}</p>}
                                     {this.state.userDetails.blog && <p><strong>Website : </strong>{this.state.userDetails.blog}</p>}
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                    <div className="card border-light mb-3">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-11  col-lg-8 col-xl-7">
                                <button type="button" class="btn btn-info mx-1 mt-1">Followers : {this.state.userDetails.followers}</button>
                                <button type="button" class="btn btn-secondary mx-1  mt-1">Following : {this.state.userDetails.following}</button>
                                <button type="button" class="btn btn-success mx-1  mt-1">Public Repos : {this.state.userDetails.public_repos}</button>
                                <button type="button" class="btn btn-danger mx-1  mt-1" >Public Gists : {this.state.userDetails.public_gists}</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {latestRepos}

                </div>
            </Fragment>
        )
    }
}

export default User
