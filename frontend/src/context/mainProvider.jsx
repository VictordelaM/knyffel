import React, { createContext } from 'react'

export const mainContext = createContext()
const MainProvider = ({children}) => {
    const [diceArray, setDiceArray] = useState()
  return (
    <mainContext.Provider value= {{diceArray, setDiceArray}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider
