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
  })
  useEffect(()=>{
    setSum(num)
  },[num])
  console.log(winCard.bigPoints.kniffel(diceArray))
  return (
    <div className='table'>
        <div className='typ'>
          <p>one</p>
          <p>two</p>
          <p>three</p>
          <p>four</p>
          <p>five</p>
          <p>six</p>
          <p>three of a kind</p>
          <p>four of a kind</p>
          <p>fullHouse</p>
          <p>lilStreet</p>
          <p>bigStreet</p>
          <p>kniffel</p>
          <p>chance</p>
        </div>
        <div className='points'>
          <p>{winCard.pash.one(diceArray)}</p>
          <p>{winCard.pash.two(diceArray)}</p>
          <p>{winCard.pash.three(diceArray)}</p>
          <p>{winCard.pash.four(diceArray)}</p>
          <p>{winCard.pash.five(diceArray)}</p>
          <p>{winCard.pash.six(diceArray)}</p>
          <p>{winCard.bigPoints.threeOfAKind(diceArray)}</p>
          <p>{winCard.bigPoints.fourOfAKind(diceArray)}</p>
          <p>{winCard.bigPoints.fullHouse(diceArray)}</p>
          <p>{winCard.bigPoints.lilStreet(diceArray)}</p>
          <p>{winCard.bigPoints.bigStreet(diceArray)}</p>
          <p>{winCard.bigPoints.kniffel(diceArray)}</p>
          <p>{winCard.bigPoints.chance(diceArray)}</p>
        </div>
    </div>
  )
}

export default Table
