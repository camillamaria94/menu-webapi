import React from 'react'
import { useHistory } from "react-router-dom";
import {isAuthenticated} from './confirmAuth' 


const history = useHistory();

export function HandleLogout() {
  return (   
  <div>
    { isAuthenticated ? localStorage.removeItem('app-token') && history.push("/login") : history.push("/login")}
  </div>
  )
}