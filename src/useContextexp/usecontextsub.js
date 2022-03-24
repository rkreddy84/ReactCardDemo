import React from "react";
import {useContext} from "../useContextexp/usecontextmain"

const UseContextSub = () => {
    return(
        <div>
        <useContext.Consumer>
       {value => <div>{value}</div>}
        </useContext.Consumer>
        </div>
    );
}

export default UseContextSub;