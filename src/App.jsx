

import './App.css'
import Body from './Components/Body'
import Login from './Components/Login'
import { Routes,Route } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
            <Route path='/' element={<Body/>} >
                <Route path='/login' element={<Login/>} />
            </Route>
        </Routes>
    </>
  )
}

export default App
