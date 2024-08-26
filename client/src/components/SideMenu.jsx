import { NavLink } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useState, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom"
import { CiLogin } from "react-icons/ci";
import { IoOpenOutline } from "react-icons/io5";
import logo from '../assets/logo.svg'
import { AuthContext } from "../context/AppContext";




function SideMenu() {

const [isOpen, setIsOpen] = useState(false)

    const {
    user: { user }, dispatch
  } = useContext(AuthContext);
  console.log(user);


  return (

    <div className="sticky left-0 top-0 md:h-screen w-full md:w-72 flex flex-col justify-between items-stretch p-5 border-r border-rose-300 bg-slate-200/40 z-20 backdrop-blur-xl md:bg-white">
                <div className="relative w-full">
                    <div className="flex items-baseline border-b border-rose-400 p-5 space-x-2">
                            <img src={logo} alt="logo"width={30}/>
                            <h2 className="text-rose-500 text-2xl font-bold font-serif italic">Bellion</h2>
                            <button className="md:hidden border border-rose-500 rounded-lg p-2 text-rose-500 text-xl absolute right-5 top-5"
                            onClick={()=>{setIsOpen(!isOpen)}}>
                                {isOpen ? <MdOutlineCancel /> : <IoMdMenu /> }
                            </button>
                    </div>
            </div>  

        <nav className={`w-full ${isOpen? 'block': 'hidden'} md:block`}>
                    <ul className="space-y-2">
                        <li className="border-b border-rose-500">
                            <NavLink exact to="/" className='flex items-center  py-2 px-4 hover:bg-rose-200 rounded'>
                            <IoHome className="font-bold text-2xl text-rose-500 mr-4"/>
                            <span className="font-serif italic font-bold text-2xl text-rose-500">Home</span>
                            </NavLink>
                        </li>
                        <li className="border-b border-rose-500">
                            <NavLink exact to="/store" className='flex items-center  py-2 px-4 hover:bg-rose-200 rounded'>
                            <FaStore className="font-bold text-2xl text-rose-500 mr-4"/>
                            <span className="font-serif italic font-bold text-2xl text-rose-500">Store</span>
                            </NavLink>
                        </li>
                        <li className="border-b border-rose-500">
                            <NavLink exact to="/cart" className='flex items-center  py-2 px-4 hover:bg-gray-200 rounded'>
                            <FaCartArrowDown className="font-bold text-2xl text-rose-500 mr-4"/>
                            <span className="font-serif italic font-bold text-2xl text-rose-500">Cart</span>
                            </NavLink>
                        </li>
                        <li className="border-b border-rose-500">
                            <NavLink exact to="/favourite" className='flex items-center  py-2 px-4 hover:bg-gray-200 rounded'>
                            <FaHeart className="font-bold text-2xl text-rose-500 mr-4"/>
                            <span className="font-serif italic font-bold text-2xl text-rose-500">Favourites</span>
                            </NavLink>
                        </li>
                    </ul>
            </nav>


            {user ? (
        <div>
          <p>{user.email}</p>
          <button
          className="border border-rose-500 rounded-xl p-2 text-rose-500"
          onClick={()=>{
            const leave = window.confirm("You sure say you wan komot?")
            if(leave){
              dispatch({type: "LOGOUT"})
              localStorage.removeItem("user")
            }
          }}
          >
              Komot
          </button>
        </div>
      ) : (
        <div
          className={` items-center space-x-5 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <Link
            to="/signup"
            className="bg-rose-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-3"
          >
            {" "}
            Sign Up <IoOpenOutline />
          </Link>
          <Link
            to="/login"
            className=" text-rose-500 border border-rose-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-3"
          >
            Log In <CiLogin />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideMenu;



        {/* <div className={`w-full ${isOpen ? 'block' : 'hidden'} md:flex justify-center space-x-2 m-1 py-5`}>
            <Link
                to='/signup'
                className="font-serif italic border px-4 py-2 bg-rose-600 border-rose-600 text-white rounded-3xl hover:bg-white hover:text-rose-600"
            >
                Sign Up <IoOpenOutline />
            </Link>
            <Link
                to='/login'
                className="font-serif italic border px-4 py-2 bg-rose-600 border-rose-600 text-white rounded-3xl hover:bg-white hover:text-rose-600"
            >
                Log In <CiLogin />
            </Link>
        </div>

    </div>
  )
}

export default SideMenu */}