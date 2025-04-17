import { USER_AVATAR } from "../../utils/constants";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
         
          <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none   data-[focus]:outline-1 data-[focus]:outline-white">
        <img src={USER_AVATAR} className="rounded-lg w-8 h-8" alt=""></img>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-38 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             
              Edit Profile
            </button>
          </MenuItem>

          <div className="my-1 h-px bg-white/5" />

          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={()=>{handleClick()}}>
              Sign Out
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>


        </div>
      )}
    </div>
  );
};

export default Heading;
