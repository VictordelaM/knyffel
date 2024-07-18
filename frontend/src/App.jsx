import { Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import MainProvider from "./context/mainProvider"


function App() {

  return (
    <>
    <MainProvider>
    <Routes>
      <Route path= '/' element= {<Home/>}/>
    </Routes>
    </MainProvider>
    </>
  )
}

export default App
