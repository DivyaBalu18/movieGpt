import Body from "./Components/Body";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from '../utils/appStore'
import Browse from "./Components/Browse";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/browse' element={<Browse/>}></Route>
        </Route>
       
      </Routes>
    </Provider>
  );
}

export default App;
