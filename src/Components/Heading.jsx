import { USER_AVATAR } from "../../utils/constants";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";

const Heading = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
 
  const handleClick = async () => {
    try {
      await signOut(auth);

      return navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="absolute top-0 ">
        <Link to="/browse">
          <img
            className="relative m-2  w-30  md:w-32 lg:w-42  xl:w-48  "
            src="/logo.png"
          ></img>
        </Link>
      </div>
      {user && (
        <div className="flex items-center absolute top-0 right-0 ">
          <img src={USER_AVATAR} className="rounded-lg w-8 h-8" alt=""></img>

          <button
            onClick={() => {
              handleClick();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9 m-2 text-red-700"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Heading;
