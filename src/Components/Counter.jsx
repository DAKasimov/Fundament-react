import { useState } from "react"

export const Counter = () =>{

    const [like, setLike] = useState(0)

    const increment = () =>{
        setLike(like + 1)
      }
    
      const decrement = () =>{
        setLike(like - 1)
      }

    return (
        <div>

            <h1>{like}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}