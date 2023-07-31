import React, { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Components/Home'
import Buses from '../Components/Buses'
// import { initialState, stateReducer } from '../Context/StateReduser'
// import { StateValue } from '../Context/Context'
import SignIn from '../Components/Signin/SignIn'
import {stateContext} from "../Context/StateContext"
import { initialState, stateReducer } from '../Context/reduser'
// import Login from '../Login'

const Routing = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
    <stateContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/buses" element={<Buses/>}></Route>          
          <Route path="/sign" element={<SignIn/>}></Route>          
          {/* <Route path="/login" element={<Login/>}></Route>           */}
          <Route path="/*" element={<h1>page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Routing