import React, { Component,Fragment } from 'react'

export class Search extends Component {
    state = {
        search:"",
        is_blank:false,
    }

    getUser = (e)=>{
        e.preventDefault()
        console.log(this.state.search)
        if(this.state.search==undefined || this.state.search=="" ){
            this.setState({is_blank:true})
            setTimeout(()=>{
            this.setState({is_blank:false})
            },4000);
        }
        else{
            this.props.getUser(this.state.search)
            this.setState({search:""});
        }
    }
    onChange= (e)=>{
        this.setState({search:e.target.value});
    }
    render() {
        // const {getUser} = this.props;
        return (
            <Fragment>
                    <div className="row justify-content-center mt-5">
                        <div className="col-8 ">
                            {
                                this.state.is_blank && <div className="alert alert-danger" role="alert">
                                    <i className="fas fa-exclamation-circle"></i>  Enter the name for search
                              </div>
                            }
                        <form onSubmit={this.getUser}>
                        <div className="form-group form-control-lg" style={{padding:0,marginBottom:0}}>
                        <label style={{width:"100%"}}>
                        <input type="text" name="search" className="form-control" placeholder="Search Users ..."  value={this.state.search} onChange={this.onChange} style={{width:"100%"}} />
                        </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Search</button>
                        </form>
                        {
                            !this.props.cleared && <button type="submit" className=" mt-2 btn btn-secondary btn-lg btn-block" onClick={()=>this.props.clearEvent()}>Clear</button>
                        }
                        </div>
                    </div>
                    
            </Fragment>
        )
    }
}

export default Search
