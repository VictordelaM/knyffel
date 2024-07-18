import React, { createContext , useState} from 'react'

export const mainContext = createContext()
const MainProvider = ({children}) => {
    const [diceArray, setDiceArray] = useState([2,2,2,2,2])
    const [diceChoice, setDiceChoice] = useState([])
    const [sum, setSum] = useState(0)
  return (
    <mainContext.Provider value= {{diceArray, setDiceArray, diceChoice, setDiceChoice, sum, setSum}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider
