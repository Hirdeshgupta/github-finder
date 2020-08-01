import React , {useReducer} from "react";
import types from "./types";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import axios from "axios"
const {
    SET_USERS,
    SET_LOADING,
    SET_CLEARED,
    SET_SEARCH,
    SET_USER_DETAILS,
    SET_REPOS,
    SET_IS_BLANK
} = types;


const GithubState  = props =>{
const initialState = {
    users:[],
    cleared:true,
    is_loading:false,
    search:"",
    userDetails:{},
    repos:[],
    is_blank:false,
}
const [state ,dispatch] = useReducer(GithubReducer,initialState);
//getUsers
const getUser = async (query)=>{
    try {
      dispatch({type:SET_LOADING})
      const response = await axios.get(`https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      dispatch({type:SET_CLEARED,payload:false})
      dispatch({type:SET_USERS,payload:response.data.items})
    } catch (error) {
      console.error(error);
    }
  }
  const clearEvent = ()=>{
    dispatch({type:SET_USERS,payload:[]})
    dispatch({type:SET_CLEARED,payload:true})
  }
// SET SEARCH 

const setSearch = x=>{
    dispatch({type:SET_SEARCH,payload:x})
}

//get details
const getDetails= async(params)=>{
    try {
        dispatch({type:SET_LOADING})
        const response = await axios.get(`https://api.github.com/users/${params}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type:SET_USER_DETAILS,payload:response.data})
      } catch (error) {
        console.error(error);
      }
}

const getRepos =async(params)=>{
    try {
        const response = await axios.get(`https://api.github.com/users/${params}/repos?sort=created&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type:SET_REPOS,payload:response.data})
      } catch (error) {
        console.error(error);
      }
}
const setIs_blank = (x)=>{
    dispatch({type:SET_IS_BLANK,payload:x})
}
return (
    <GithubContext.Provider value={
        {
            users:state.users,
            is_loading:state.is_loading,
            cleared:state.cleared,
            search :state.search,
            userDetails:state.userDetails,
            repos:state.repos,
            is_blank:state.is_blank,
            getUser,
            clearEvent,
            setSearch,
            getDetails,
            getRepos,
            setIs_blank
        }
    }>
        {props.children}
    </GithubContext.Provider>
)
}
export default GithubState