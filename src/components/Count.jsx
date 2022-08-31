import React from "react";

export const Count = () => {
    const  count = 1
    const handleClick = () => {
        console.log('click')
    }
    return(
        <div>
            <p>Count state: {count}</p>
            <p>Count props: {count}</p>
            <button type="button" onClick={handleClick}>click</button>
        </div>
    )

}
