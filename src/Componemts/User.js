import React, {Fragment,useState,useEffect, useContext} from 'react'
import {Link } from "react-router-dom"
import Preloader from "./Preloader";
import githubContext from "../context/githubContext";
const User =({match:{params},})=> {
    const {getDetails,is_loading,userDetails,getRepos,repos} = useContext(githubContext);
    useEffect(() => {
        getRepos(params.name);
        getDetails(params.name);
    }, [])
        const latestRepos = [];
        for(let i=0;i<5;i++){
            latestRepos.push(
                repos[i] && (
                    <div className="col-12">
                    <div className="card border-light mb-3">
                        <h5 className="py-2 pl-2 "><a className="text-white" href={repos[i].html_url }>{ repos[i].name }</a></h5>
                    </div>
                </div>
                )
            )
        } 
        return (
            is_loading ? <Preloader /> :(
            <Fragment>
                <div className="row mt-4 align-ite" >

                <div className="col-5 col-lg-2">
                <Link type="button" to="/" className="btn btn-primary">Go To Search</Link>
                </div>
                <div className=" col-4 col-md-2">
                    <h5>Hirable {userDetails.hireable ? <i className="fas fa-check" style={{color:"green"}}></i> : <i className="fas fa-times" style={{color:"red"}}></i>}</h5>
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
                                    <img src={userDetails.avatar_url}  className="card-img-top" alt="..." style={{borderRadius:"50%",height:150,width:150}}></img>
                                    </div>
                                    </div> 
                                        <h2 className="text-center mt-2">{userDetails.name ? userDetails.name : userDetails.login}</h2>
                                        {userDetails.location && <p className="text-center mt-0" >{userDetails.location}</p>} 
                                </div>
                                <div className="col-md-6">
                                    {userDetails.login &&  <div><h4>Bio</h4><p >{userDetails.bio}</p></div>}
                                        <a href={userDetails.html_url} type="button" className="btn btn-primary">Visit Github Profile</a>
                                       <p className="mt-3"><strong>Username : </strong>{userDetails.login}</p>
                                       {userDetails.company && <p><strong>Company :</strong>{userDetails.company}</p>}
                                     {userDetails.blog && <p><strong>Website : </strong>{userDetails.blog}</p>}
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
                                <button type="button" className="btn btn-info mx-1 mt-1">Followers : {userDetails.followers}</button>
                                <button type="button" className="btn btn-secondary mx-1  mt-1">Following : {userDetails.following}</button>
                                <button type="button" className="btn btn-success mx-1  mt-1">Public Repos : {userDetails.public_repos}</button>
                                <button type="button" className="btn btn-danger mx-1  mt-1" >Public Gists : {userDetails.public_gists}</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {latestRepos}
                </div>
                </Fragment>
            )
        )
}
export default User
