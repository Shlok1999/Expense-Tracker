import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState={
    transactions: [
        {id: 1, text: 'Flowers', amount: -20},
        {id: 2, text: 'Salary', amount: 2000},
        {id: 3, text: 'Book', amount: -200},
        {id: 4, text: 'Camera', amount: -350},

    ]
}


//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}
