import React from 'react'
import HOC from "../hocexp/hoc"
const hocmain = ({name}) => {
  return (
    <div>Login Success: {name}</div>
  )
}

export default HOC(hocmain)
