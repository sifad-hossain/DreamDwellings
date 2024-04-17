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
                to='/about'>About</NavLink>
            <NavLink
                className={({ isActive }) => isActive ? 'text-secondary text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold'}
                to='/profile'>Updated Profile</NavLink>
            <NavLink
                className={({ isActive }) => isActive ? 'text-secondary text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold'}
                to='/blog'>Blog</NavLink>

        </>

    const { logout, user } = useAuth()

    return (

        <nav className="flex items-center justify-between bg-violet-700 px-4 py-2 text-white">
            <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">

                <Link
                    to='/'
                    className="bg-gradient-to-r from-slate-200 via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">DreamDwellings</Link>



            </div>
            <ul className="flex items-center justify-between gap-6 text-slate-200 font-semibold">

                {links}


            </ul>
            <div className="">

                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "https://i.ibb.co/WsR6pb4/bu1.jpg"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52 bg-white ">
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

        </nav>
    );
};

export default Navbar;