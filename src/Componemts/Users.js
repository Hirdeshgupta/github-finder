import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
export class Users extends Component {
    render() {
        const {users} = this.props
        return (
            <div className="row justify-content-around">
                    {
                 users.map(x=>
                    <div className="col-lg-4 col-sm-6 col-10">
                    <div className="card border-secondary my-5 " style={{maxWidth: "20rem"}}>
                        <div className="row justify-content-center mt-4">
                            <div className="col-md-6 col-8 col-lg-9 col-xl-8 " >
                            <img src={x.avatar_url}  className="card-img-top" alt="..." style={{borderRadius:"50%"}}></img>

                            </div>
                        </div>
                    <div className="card-body">
                 <p className="text-center">{x.login}</p>
                        <div className="row justify-content-center">
                            <div className="col-3 col-lg-4 pl-2 pl-lg-4 " >
                            <Link to={`user/${x.login}`} type="button" className="btn btn-primary">More</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                )
                    }

            </div>


        )
    }
}

export default Users
