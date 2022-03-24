import React from 'react'

const hoc = (Component) => {
  return (
     class extends React.Component{
         state = {
             auth:true
         }
          render(){
              return(
                  <React.Fragment>
                  {this.state.auth ? <Component name="Rama"/> : <h2>Please login</h2>}
                  </React.Fragment>
              )
          }
     }
  )
}

export default hoc