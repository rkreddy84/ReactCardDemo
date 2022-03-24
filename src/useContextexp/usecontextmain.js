import React from 'react'
import UseContextSub from "../useContextexp/usecontextsub"
export const useContext = React.createContext();
function usecontextmain() {

    return (
    <div>
        <useContext.Provider value="rama">
            <UseContextSub/>
        </useContext.Provider>
        
    </div>
  )
}

export default usecontextmain