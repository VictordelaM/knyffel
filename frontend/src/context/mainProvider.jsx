import React, { createContext , useState} from 'react'

export const mainContext = createContext()
const MainProvider = ({children}) => {
    const [diceArray, setDiceArray] = useState([2,2,2,2,2])
    const [diceChoice, setDiceChoice] = useState([])
  return (
    <mainContext.Provider value= {{diceArray, setDiceArray, diceChoice, setDiceChoice}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider
