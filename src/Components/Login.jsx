import { useState, useRef } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import PasswordVisibility from "./PasswordVisibility";
import validation from "../../utils/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const recaptcha = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    console.log("Hi")
    setError(validation(email.current.value, password.current.value));

    if (error) return;

    console.log("hello")
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      console.log(userCredential.user);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <div className="flex h-screen  justify-center   ">
      <div className="relative mt-10 flex flex-col   xl:w-1/4 lg:w-2/6 md:w-2/4 sm:w-3/5 xs:w-2/4     w-7/8  lg:h-5/6  xl:h-3/4  md:h-4/5 sm:h-4/5  h-6/7 bg-black text-white opacity-95 ">
        <div className="m-8 mt-6 pr-8 p-4">
          <h1 className="my-4 m-4 text-4xl"> Sign In </h1>

          <input
            id="email"
            type="email"
            placeholder="EMAIL ID"
            ref={email}
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
            top="54"
          />

          <button
            onClick={() => handleSubmit()}
            className="bg-red-700 opacity-100  rounded m-3 p-2 w-full "
          >
            SIGN IN
          </button>
          <p className="mx w-full m-3 p-2 text-red-600">{error}</p>
          <p className="mx w-full m-3 text-zinc-500 p-2">
            New to MovieGPT?{" "}
            <Link to="/SignUp" className="text-white">
              Sign up now.
            </Link>
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
