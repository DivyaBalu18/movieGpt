import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const PasswordVisibility = ({ showPassword, setPassword, top }) => {
  const tooglePassword = () => {
    setPassword(!showPassword);
  };
  return (
    <div>
      {showPassword ? (
        <button
          type="button"
          className={
            "cursor-pointer absolute top-" + top + " right-15 border-none "
          }
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
          className={
            "cursor-pointer absolute top-" + top + " right-15 border-none "
          }
        >
          <FaEyeSlash
            onClick={() => {
              tooglePassword();
            }}
          />
        </button>
      )}
    </div>
  );
};

export default PasswordVisibility;
