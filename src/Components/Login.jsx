import { useState, useRef } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const recaptcha = useRef(null);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen  justify-center   ">
      <div className="relative mt-17 flex flex-col   xl:w-1/4 lg:w-2/4 sm:w-3/5 xs:w-3/4  md:w-2/4  w-3/3  h-[700px] bg-black text-white opacity-95 ">
        <div className="m-8 mt-6 pr-8 p-4">
          <h1 className="my-4 m-4 text-4xl"> Sign In </h1>

          <input
            id="email"
            type="email"
            placeholder="EMAIL ID"
            className="   border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
          />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="    border-zinc-500 text-white bg-gray-800 rounded border-1 p-3 m-3 w-full"
          />
          {showPassword ? (
            <button
              type="button"
              className="cursor-pointer absolute top-54 right-15 border-none "
            >
              <FaRegEye
                onClick={() => {
                  tooglePassword();
                }}
              />
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer absolute top-54 right-15 border"
            >
              <FaEyeSlash
                onClick={() => {
                  tooglePassword();
                }}
              />
            </button>
          )}

          <button className="bg-red-700 opacity-100  rounded m-3 p-2 w-full ">
            {" "}
            SIGN IN{" "}
          </button>
          <p className="mx w-full m-3 text-zinc-500 p-2">
            New to MovieGPT? <span className="text-white">Sign up now.</span>
          </p>

          <div className="flex justify-center ">
            <ReCAPTCHA
              style={{ visibility: "hidden" }}
              size="invisible"
              render="explicit"
              data-theme="dark"
              sitekey={import.meta.env.VITE_SITE_KEY}
              ref={recaptcha}
            />
          </div>

          <div className="text-sm m-3 p-2 text-zinc-400">
            <div>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </div>

            <p>
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalized
              advertising by Google).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
