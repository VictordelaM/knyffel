import React, { useContext, useEffect } from 'react'
import { mainContext } from '../context/mainProvider'

const DiceRoll = () => {
    const { diceArray, setDiceArray } = useContext(mainContext);
    // const {diceChoice, setDiceChoice} = useContext(mainContext)
    // useEffect(()=> {
    //     let startArr = [2, 2, 2, 2, 2]
    //     setDiceArray(startArr)
    // },[])

    // useEffect(() => {
    //     let array = diceArray
    //     while (array.length < 5) {//!die funktion muss spezifisch auf den index zugreifen 
    //         const num = Math.ceil(Math.random() * 6);//langfristig muss die funktion checken welcher index angewählt werden soll
    //         array.push(num);
    //     }
    //     setDiceArray(array);
    // }, [setDiceArray]);
    // let diceArray = [2,2,2,2,2]
    const checkIndex = (formValues) =>{
        let index = []
        if (formValues.dice1 == 'on') {
            index.push(0)
        } if (formValues.dice2 == 'on') {
            index.push(1)
        } if (formValues.dice3 == 'on') {
            index.push(2)
        } if (formValues.dice4 == 'on') {
            index.push(3)
        } if (formValues.dice5 == 'on') {
            index.push(4)
        }
        return index
    }
    const roll = (indexArr)=>{
        let dices = [...diceArray]
        indexArr.map((i)=>{
            const num = Math.ceil(Math.random() * 6)
            dices[i] = num
            console.log('dices',dices)
        })
       setDiceArray(dices)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        roll(checkIndex(formValues))
    } 
  return (
    <div>
        <p>DiceRoll</p>
        <p>{diceArray}</p>
        <div>
            <p>{diceArray[0]}</p>
            <p>{diceArray[1]}</p>
            <p>{diceArray[2]}</p>
            <p>{diceArray[3]}</p>
            <p>{diceArray[4]}</p>
        </div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="dice1">dice1</label>
        <input type="checkbox" name="dice1" id="dice1" />
        <label htmlFor="dice2">dice2</label>
        <input type="checkbox" name="dice2" id="dice2" />
        <label htmlFor="dice3">dice3</label>
        <input type="checkbox" name="dice3" id="dice3" />
        <label htmlFor="dice4">dice4</label>
        <input type="checkbox" name="dice4" id="dice4" />
        <label htmlFor="dice5">dice5</label>
        <input type="checkbox" name="dice5" id="dice5" />
        <button>roll</button>
        </form>
    </div>
  )
}

export default DiceRoll
