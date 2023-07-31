import React, { useContext, useEffect, useState } from 'react'
import "./Form.css"
import {useNavigate} from "react-router-dom"
import { TextField } from '@mui/material'
import bus from "../Buses.json"
// import { initialState, stateReducer } from '../../Context/StateReduser'
import { stateContext } from '../../Context/StateContext'
// import { StateValue } from '../../Context/Context'


const Form = () => {
const [from,setFrom]=useState("")
const[to,setTo]=useState("");
const [date,setDate]=useState("");
  const GetInfo=(e)=>{
          setFrom(e.target.value)
  }
  const GetInfoTo=(e)=>{
    setTo(e.target.value)
}
const GetInfoDate=(e)=>{
  setDate(e.target.value)
}
const {state, dispatch} = useContext(stateContext)
  const Navi=useNavigate()
  const ShowBuses=(e)=>{
  
    if(from==""||to==""||date==""){
      let parent=document.querySelector("h4")
      parent.classList.add("open")
      parent.classList.remove("close")
    }
    else{
      
      // dispatch({type:"search",payload:userBus})
      dispatch({type:"LOGIN",payload:true})
      // console.log(userBus);
      dispatch({type:'date',payload:date})
    Navi(`/buses/?from=${from}&&to=${to}&&onBoard=${date}`)
    }
    
    
  }


 

  return (
    <div>
      <div className="banner">
        <div className="container ggo">
          <div className="row confused justify-content-center w-75 m-auto">
            <div className="col-lg-3 co1-12 d-flex align-items-center bor  py-4">
            <i class="ri-bus-fill fs-3"></i>
              <TextField 
              onChange={GetInfo}
                id="filled-multiline-static"
                label="From"
                multiline
                rows={1}
                variant="filled"
              />
            </div>
            <div className="col-lg-3 co1-12 d-flex align-items-center bor  py-4">
            <i class="ri-bus-fill fs-3"></i>
              <TextField
              onChange={GetInfoTo}
                id="filled-multiline-static"
                label="To"
                multiline
                rows={1}
                variant="filled"
              />
            </div>
            <div className=" date-set col-lg-3 co1-12 d-flex align-items-center gap-2  py-4">
            <i class="bi bi-calendar3 fs-3"></i>
              <input onChange={GetInfoDate} type="date" />
            </div>
            <div onClick={ShowBuses} className="col-lg-3 co1-12 searchbus redbox d-flex align-items-center py-4 bg-danger justify-content-center ">
            SEARCH BUSES
            </div>
            {/* <div className="col redbox bg-danger d-flex align-items-center justify-content-center py-4">
              <p className='searchbus'>SEARCH BUSES</p>
            </div> */}
          </div>
          <div className="validation ">
          <h4 className='error close'>Enter 'From' and 'To'</h4>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Form