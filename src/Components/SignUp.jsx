import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordVisibility from "./PasswordVisibility";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <div className="flex h-screen  justify-center   ">
    <div className="relative rounded-lg mt-10 flex flex-col   xl:w-1/4 lg:w-2/6 md:w-2/4 sm:w-3/5 xs:w-2/4     w-7/8  lg:h-4/6  xl:h-3/5  md:h-3/5 sm:h-3/5  h-5/7 bg-black text-white opacity-90 ">
      <div className="m-8 mt-6 pr-8 p-4">
        <h1 className="my-4 m-4 text-4xl"> Sign In </h1>


        <input
          id="name"
          type="text"
          placeholder="Name"
          className="   border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
        />

        <input
          id="email"
          type="email"
          placeholder="Email Id"
          className="   border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
        />
        
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          className="    border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
        />
         
         <PasswordVisibility showPassword={showPassword} setPassword={setShowPassword} top="72"/>

         <input
          id="confirm"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          className="border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
        />

        <PasswordVisibility showPassword={showConfirmPassword} setPassword={setShowConfirmPassword} top="90"/>
        
        <button className="bg-red-700 opacity-100  rounded m-3 p-2 w-full ">
          
          SIGN IN
        </button>
        
        <p className="mx w-full m-3 text-zinc-500 p-2">
            <Link to='/login'   className="text-white">Click here for Login.</Link>
          </p>


        </div>
        </div>
        </div>
  )
}

export default SignUp