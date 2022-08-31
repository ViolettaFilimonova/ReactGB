import React from "react";
import {useState} from "react";

export const Count = () => {
    const  [count, setCount] = useState(1)

    const handleClick = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <p>Count state: {count}</p>
            <p>Count props: {count}</p>
            <button type="button" onClick={handleClick}>click</button>
        </div>
    )

}
