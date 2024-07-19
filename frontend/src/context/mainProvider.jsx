import React, { createContext , useState} from 'react'

export const mainContext = createContext()
const MainProvider = ({children}) => {
    const [diceArray, setDiceArray] = useState([2,2,2,2,2])
    const [diceChoice, setDiceChoice] = useState([])
    const [sum, setSum] = useState(0)
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [three, setThree] = useState(0)
    const [four, setFour] = useState(0)
    const [five, setFive] = useState(0)
    const [six, setSeven] = useState(0)
    const [threeOfAKind, setThreeOfAKind] = useState(0)
    const [fourOfAKind, setFourOfAKind] = useState(0)
    const [fullHouse, setFullHouse] = useState(0)
    const [lilStreet, setlilStreet] = useState(0)
    const [kniffel, setKniffel] = useState(0)
    const [chance, setChance] = useState(0)
    const [playerOne, setPlayerOne] = useState({
      name: "playerOne",
      points: {
          one:{p:0,available:true},
          two:{p:0,available:true},
          three:{p:0,available:true},
          four:{p:0,available:true},
          five:{p:0,available:true},
          six:{p:0,available:true},
          threeOfAKind:{p:0,available:true},
          fourOfAKind:{p:0,available:true},
          fullHouse:{p:0,available:true},
          lilStreet:{p:0,available:true},
          bigStreet:{p:0,available:true},
          kniffel:{p:0,available:true},
          chance:{p:0,available:true},
      },
      savedPoints:0
  })
  return (
    <mainContext.Provider value= {{diceArray, setDiceArray, diceChoice, setDiceChoice, sum, setSum, playerOne, setPlayerOne}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider
