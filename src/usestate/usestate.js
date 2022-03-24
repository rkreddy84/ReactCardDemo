import React,{useEffect, useState} from "react";

const Usestate = () => {

    const [count,setCount] = useState(0);
    useEffect(() => console.log(count),[count]);
    return (
        <div className="text-center">
         <h2>{count}</h2>
         <button onClick={() => setCount(count+1) }>click</button>
         </div>
    );
}
export default Usestate;