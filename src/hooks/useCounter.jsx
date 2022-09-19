import React, { useState } from 'react'

export const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((value) => value + 1)
    }

    const reset = () => {
        setCounter(0)
    }

  
    return {
        counter,
        increment,
        reset
    }
}
