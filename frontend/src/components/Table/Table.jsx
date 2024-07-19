import React, { useContext, useEffect } from 'react'
import './table.css'
import { mainContext } from '../../context/mainProvider'
import winCard from '../checkWins/checkWins'

const Table = () => {
  const {diceArray, setDiceArray} = useContext(mainContext)
  const {sum, setSum} = useContext(mainContext)
  const {playerOne, setPlayerOne} = useContext(mainContext)
  let num = 0
  diceArray.map((i)=>{
    num += i
  })
  useEffect(()=>{
    setSum(num)
  },[num])



  const choosePoints = (typ) =>{
    let player = {...playerOne}
    if(typ == 'one' && playerOne.points.one.available){
      player.points.one.p = winCard.pash.one(diceArray)
      player.points.one.available = false
      console.log(player.points.one)
      setPlayerOne(player)
    }
    if(typ == 'two' && playerOne.points.two.available){
      player.points.two.p = winCard.pash.two(diceArray)
      player.points.two.available = false
      console.log(player.points.two)
      setPlayerOne(player)
    }
    if(typ == 'three' && playerOne.points.three.available){
      player.points.three.p = winCard.pash.three(diceArray)
      player.points.three.available = false
      console.log(player.points.three)
      setPlayerOne(player)
    }
    if(typ == 'four' && playerOne.points.four.available){
      player.points.four.p = winCard.pash.four(diceArray)
      player.points.four.available = false
      console.log(player.points.four)
      setPlayerOne(player)
    }
    if(typ == 'five' && playerOne.points.five.available){
      player.points.five.p = winCard.pash.five(diceArray)
      player.points.five.available = false
      console.log(player.points.five)
      setPlayerOne(player)
    } 
    if(typ == 'six' && playerOne.points.six.available){
      player.points.six.p = winCard.pash.six(diceArray)
      player.points.six.available = false
      console.log(player.points.six)
      setPlayerOne(player)
    }
    if(typ == 'threeOfAKind' && playerOne.points.threeOfAKind.available){
      player.points.threeOfAKind.p = winCard.bigPoints.threeOfAKind(diceArray)
      player.points.threeOfAKind.available = false
      console.log(player.points.threeOfAKind)
      setPlayerOne(player)
    }
    if(typ == 'fourOfAKind' && playerOne.points.ourOfAKind.available){
      player.points.ourOfAKind.p = winCard.bigPoints.ourOfAKind(diceArray)
      player.points.ourOfAKind.available = false
      console.log(player.points.ourOfAKind)
      setPlayerOne(player)
    }
    if(typ == 'fullHouse' && playerOne.points.fullHouse.available){
      player.points.fullHouse.p = winCard.bigPoints.fullHouse(diceArray)
      player.points.fullHouse.available = false
      console.log(player.points.fullHouse)
      setPlayerOne(player)
    }
    if(typ == 'lilStreet' && playerOne.points.lilStreet.available){
      player.points.lilStreet.p = winCard.bigPoints.lilStreet(diceArray)
      player.points.lilStreet.available = false
      console.log(player.points.lilStreet)
      setPlayerOne(player)
    }
    if(typ == 'bigStreet' && playerOne.points.bigStreet.available){
      player.points.bigStreet.p = winCard.bigPoints.bigStreet(diceArray)
      player.points.bigStreet.available = false
      console.log(player.points.bigStreet)
      setPlayerOne(player)
    }
    if(typ == 'kniffel' && playerOne.points.kniffel.available){
      player.points.kniffel.p = winCard.bigPoints.kniffel(diceArray)
      player.points.kniffel.available = false
      console.log(player.points.kniffel)
      setPlayerOne(player)
    }
    if(typ == 'chance' && playerOne.points.chance.available){
      player.points.chance.p = winCard.bigPoints.chance(diceArray)
      player.points.chance.available = false
      console.log(player.points.chance)
      setPlayerOne(player)
    }
    
    
    console.log(playerOne.points)
    // switch (typ){
    //   case 'one':
    //     player.points.one = winCard.pash.one(diceArray)
    //     console.log(player.points.one)
    //     break
    //   case 'two':
    //     player.points.two = winCard.pash.two(diceArray)
    //     console.log(player.points.one)    
    //     break
    
    
    }

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
        <div className='possiblePoints'>
          <p onClick={()=>choosePoints('one')}>{winCard.pash.one(diceArray)}</p>
          <p onClick={()=>choosePoints('two')}>{winCard.pash.two(diceArray)}</p>
          <p onClick={()=>choosePoints('three')}>{winCard.pash.three(diceArray)}</p>
          <p onClick={()=>choosePoints('four')}>{winCard.pash.four(diceArray)}</p>
          <p onClick={()=>choosePoints('five')}>{winCard.pash.five(diceArray)}</p>
          <p onClick={()=>choosePoints('six')}>{winCard.pash.six(diceArray)}</p>
          <p onClick={()=>choosePoints('threeOfAKind')}>{winCard.bigPoints.threeOfAKind(diceArray)}</p>
          <p onClick={()=>choosePoints('fourOfAKind')}>{winCard.bigPoints.fourOfAKind(diceArray)}</p>
          <p onClick={()=>choosePoints('fullHouse')}>{winCard.bigPoints.fullHouse(diceArray)}</p>
          <p onClick={()=>choosePoints('lilStreet')}>{winCard.bigPoints.lilStreet(diceArray)}</p>
          <p onClick={()=>choosePoints('bigStreet')}>{winCard.bigPoints.bigStreet(diceArray)}</p>
          <p onClick={()=>choosePoints('kniffel')}>{winCard.bigPoints.kniffel(diceArray)}</p>
          <p onClick={()=>choosePoints('chance')}>{winCard.bigPoints.chance(diceArray)}</p>
        </div>
        <div className='points'>
          <p>{playerOne.points.one.p}</p>
          <p>{playerOne.points.two.p}</p>
          <p>{playerOne.points.three.p}</p>
          <p>{playerOne.points.four.p}</p>
          <p>{playerOne.points.five.p}</p>
          <p>{playerOne.points.six.p}</p>
          <p>{playerOne.points.threeOfAKind.p}</p>
          <p>{playerOne.points.fourOfAKind.p}</p>
          <p>{playerOne.points.fullHouse.p}</p>
          <p>{playerOne.points.lilStreet.p}</p>
          <p>{playerOne.points.bigStreet.p}</p>
          <p>{playerOne.points.kniffel.p}</p>
          <p>{playerOne.points.chance.p}</p>
        </div>
    </div>
  )
}

export default Table
