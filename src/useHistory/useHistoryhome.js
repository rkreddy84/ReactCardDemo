import React from 'react'
import {useNavigate} from "react-router-dom"

function useHistoryhome() {
  let history = useNavigate();
  return (
      <div>
    <div>Home</div>
    <button  onClick={() => history.push('/dashboard')}>Login</button>
    </div>
  )
}

export default useHistoryhome