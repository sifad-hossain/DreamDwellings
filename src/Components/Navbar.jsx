// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {

    const links =
        <>
            <NavLink
                className={({ isActive }) => isActive ? 'text-secondary text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold'}
                to='/'>Home</NavLink>
            <NavLink
                className={({ isActive }) => isActive ? 'text-secondary text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold'}
                to='/products'>product</NavLink>
          
            <NavLink
                className={({ isActive }) => isActive ? 'text-secondary text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold'}
                to='/profile'>Updated Profile</NavLink>
            <NavLink
                className={({ isActive }) => isActive ? 'text-secondary text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold'}
                to='/blog'>Blog</NavLink>

        </>

    const { logout, user } = useAuth()
    return (
        <div className="navbar bg-violet-700 shadow-lg fixed z-10">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-700 rounded-box w-52 text-white ">
            {links}
            </ul>
          </div>
          <Link
                    to='/'
                    className="bg-gradient-to-r from-slate-200 via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient text-[20px] font-bold">DreamDwellings</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-200 gap-6 ">
          {links}
          </ul>
        </div>


          <div className=" navbar-end">
                {
                    user ? <div className="dropdown  dropdown-hover dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full">
                                <img src={user?.photoURL || "https://i.ibb.co/WsR6pb4/bu1.jpg"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2  rounded-box bg-white ">
                            <li>
                                <button className="btn btn-sm bg-violet-600  btn-ghost hover:bg-purple-600">{user?.displayName || 'user name not found'}</button>

                            </li>
                            <li>
                                <button
                                    onClick={logout}
                                    className="btn btn-sm mt-1 btn-ghost bg-violet-600 hover:bg-purple-600">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
      </div>
    );
};

export default Navbar;