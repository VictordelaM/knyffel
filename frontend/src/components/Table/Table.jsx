import React, { useContext, useEffect } from 'react'
import './table.css'
import { mainContext } from '../../context/mainProvider'
import winCard from '../checkWins/checkWins'

const Table = () => {
  const {diceArray, setDiceArray} = useContext(mainContext)
  const {sum, setSum} = useContext(mainContext)
  let num = 0
  diceArray.map((i)=>{
    num += i
    console.log(num)
  })
  console.log(sum, 'sum')
  useEffect(()=>{
    setSum(num)
  },[num])

  console.log('win',winCard.bigPoints.bigStreet([1,4,3,2,5]))


  return (
    <div className='table'>
        <div>1</div>
        <div>name</div>
        <div>punkte</div>
        <div>{sum}</div>
    </div>
  )
}

export default Table
