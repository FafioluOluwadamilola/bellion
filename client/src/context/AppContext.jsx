import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const AuthProvider  = ({ children }) => {

    const authReducer = (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return{
                    ...state,
                    user: action.payload
                }
            
            case 'LOGOUT':
                return{
                    ...state,
                    user: null
                }
            default:
                return state
        }
    }

    const [user, dispatch] = useReducer(authReducer, {user:null})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user){
            dispatch({type: 'LOGIN', payload: user})}
    }, [])


    console.log("Auth" ,user)

    return(
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 
