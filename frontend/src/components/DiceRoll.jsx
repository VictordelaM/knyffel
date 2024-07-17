import React, { useContext } from 'react'
import { mainContext } from '../context/mainProvider'

const DiceRoll = () => {
    let array = [2,2,2,2,2]
    // const [diceArray, setDiceArray] = useContext(mainContext)
    console.log(array.length)
    while (array.length < 5){
        const num  = Math.ceil(Math.random() * 6 )
        array.push(num)
    }
  return (
    <div>
        <p>DiceRoll</p>
        <p>{array}</p>
    </div>
  )
}

export default DiceRoll
