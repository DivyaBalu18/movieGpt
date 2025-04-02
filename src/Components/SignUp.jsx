import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PasswordVisibility from "./PasswordVisibility";
import validation from "../../utils/validation";
import {auth} from "../../utils/firebase"
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const username = useRef(null);
  const [Error, setError] = useState("");

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")

 
   
    setError(validation(email.current.value, password.current.value));
    if (password.current.value !== confirmPassword.current.value)
        setError("passwords do not match");
    
    console.log(Error)
    if(Error) return;

   
    
    try {
       console.log("ok")
      const userCredential = await createUserWithEmailAndPassword(auth,email.current.value, password.current.value);
      const user = userCredential.user;
  
      console.log(user)
      await updateProfile(user, {
        displayName: username.current.value
      });
  
      setError("User created")
  
    } catch (error) {
      
      const errorMessage = error.message;
     
      setError(errorMessage)
    }



  };

  return (
    <div className="flex h-screen  justify-center   ">
      <div className="relative rounded-lg mt-10 flex flex-col   xl:w-1/4 lg:w-2/6 md:w-2/4 sm:w-3/5 xs:w-2/4     w-7/8  lg:h-4/6  xl:h-3/5  md:h-3/5 sm:h-3/5  h-5/7 bg-black text-white opacity-90 ">
        <div className="m-8 mt-6 pr-8 p-4">
          <h1 className="my-4 m-4 text-4xl"> Sign In </h1>

          <input
            id="name"
            type="text"
            ref={username}
            placeholder="Name"
            className="   border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
          />

          <input
            id="email"
            type="email"
            ref={email}
            placeholder="Email Id"
            className="   border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            ref={password}
            className="    border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
          />

          <PasswordVisibility
            showPassword={showPassword}
            setPassword={setShowPassword}
            top="72"
          />

          <input
            id="confirm"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            ref={confirmPassword}
           
            className="border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
          />

          <PasswordVisibility
            showPassword={showConfirmPassword}
            setPassword={setShowConfirmPassword}
            top="92"
          />

          <button
            
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="bg-red-700 cursor-pointer opacity-100  rounded m-3 p-2 w-full hover:bg-red-600 focus:outline-2 focus:border-black focus:outline-red-500 active:bg-red-700 "
          >
            SIGN IN
          </button>

          <p className="px-3 mx-3  w-full text-red-500">{Error}</p>

          <p className="mx w-full m-3 text-zinc-500 p-2">
            <Link to="/" className="text-white">
              Click here for Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
