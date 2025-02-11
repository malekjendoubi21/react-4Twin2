import { useState } from "react";

export default function Counter (props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>compteur: {count}</h2>
            <button onClick={()=>setCount(count + props.step)} >Increment +{props.step}</button>
            <button onClick={()=>setCount(count - props.step)} >Decrement -{props.step}</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}