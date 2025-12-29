import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";

const Nav = () => {

  const {user, setShowLogin, logout, credit} = useContext(AppContext)

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-5">
      <Link to="/">
        <img src={assets.logo} className="w-30 sm:w-35 lg:w-40" />
      </Link>

      <div>                 {/*differnt buttons for diff users*/}
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">

            <button 
            onClick={()=>navigate('/buy')} 
            className="flex items-center gap-2 bg-blue-200
            px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105
            transition-all duration-700">
              
              <img
              className="w-5" 
              src={assets.credit_star}/>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credit left : {credit}
              </p>
            </button>

            <p className="text-gray-600 max-sm:hidden pl-4">
              {user.name}
            </p>
            <div className="relative group">
              <img className="w-10 drop-shadow" src={assets.profile_icon}/>
              
              <div className="absolute hidden group-hover:block
              top-0 right-0 z-10 text-black rounded pt-12">
                
                <ul className="list-none rounded-md m-0 p-2 bg-white">
                  <li 
                  onClick={logout}
                  className="py-1 px-2 cursor-pointer pr-10">
                    Logout
                  </li>
                </ul>

              </div>

            </div>
          </div>       /*nav buttons for logged in users*/
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p 
            onClick={() => navigate("/buy")} 
            className="cursor-pointer">
              Pricing
            </p>
            <button 
            onClick={()=> setShowLogin(true)}
            className="bg-zinc-800 text-white 
              px-8 py-2 sm:px-10 text-sm rounded-full cursor-pointer">
              Login
            </button>
          </div>
        )}                 {/*nav buttons for logged out users*/}
      </div>
    </div>
  );
};

export default Nav;
