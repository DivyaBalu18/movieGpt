import Body from "./Components/Body";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
