import React, {useContext } from 'react';
import githubContext from "../context/githubContext";
 const  Search = ()=> {
    const {cleared,getUser,clearEvent,search,setSearch,is_blank,setIs_blank} =useContext(githubContext);
     const getUser1 = (e)=>{
        e.preventDefault()
        if(search==undefined || search=="" ){
            setIs_blank(true);
            setTimeout(()=>{
            setIs_blank(false)
            },4000);
        }
        else{
            getUser(search)
            setSearch("");
        }
    }
    const onChange= (e)=>{
        setSearch(e.target.value);
    }
        return (
                    <div className="row justify-content-center mt-5">
                        <div className="col-8 ">
                            {
                                is_blank && <div className="alert alert-danger" role="alert">
                                    <i className="fas fa-exclamation-circle"></i>  Enter the name for search
                              </div>
                            }
                        <form onSubmit={getUser1}>
                        <div className="form-group form-control-lg" style={{padding:0,marginBottom:0}}>
                        <label style={{width:"100%"}}>
                        <input type="text" name="search" className="form-control" placeholder="Search Users ..."  value={search} onChange={onChange} style={{width:"100%"}} />
                        </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Search</button>
                        </form>
                        {
                            !cleared && <button type="submit" className=" mt-2 btn btn-secondary btn-lg btn-block" onClick={()=>clearEvent()}>Clear</button>
                        }
                        </div>
                    </div>
        )
}
export default Search
