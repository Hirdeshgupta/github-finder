import types from "./types";
const {
    SET_USERS,
    SET_LOADING,
    SET_CLEARED,
    SET_SEARCH,
    SET_USER_DETAILS,
    SET_REPOS,
    SET_IS_BLANK
} = types;
const githubReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return ({
                ...state,
                users: action.payload,
                is_loading: false,
            })
        case SET_LOADING:
            return ({
                ...state,
                is_loading: true,
            })
        case SET_CLEARED:
            return ({
                ...state,
                cleared: action.payload,
            })
        case SET_SEARCH:
            return ({
                ...state,
                search: action.payload,
            })
        case SET_USER_DETAILS:
            return ({
                ...state,
                userDetails: action.payload,
                is_loading: false,
            })
        case SET_REPOS:
            return ({
                ...state,
                repos: action.payload,
            })
        case SET_IS_BLANK:
            return ({
                ...state,
                is_blank: action.payload,
            })
    }

}
export default githubReducer;