import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    //navigation systems
    const navigate = useNavigate()
    const from = '/';


    const onSubmit = data => {

        const { email, password, image, fullName } = data;
        setRegisterError('')


        if (password.length < 6) {
            toast('password should be at least 6 characters or longer')
            return;
        }
        // else if (!/[a-z] && [A-Z]/.test(password) ) {
        else if (!/[A-Z]/.test(password) ) {
            toast('your password should have at least one uppercase and lowercase charaters')
            return;
        }


        //Create user and update profile
        createUser(email, password)
            .then(result => {
                updateUserProfile(fullName, image)
                    .then(() => {
                        toast('user creadted succesfully')
                        navigate(from)
                    })
            })
            .catch(error => {
                // setRegisterError(error.message)
                toast('please right your email')
            })
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto pt-28">
            <h1 className="text-3xl font-bold text-center text-indigo-600">Register</h1>
            {/* Input fields and the form started */}
            <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block ">
                        Your name
                    </label>

                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                        {...register("fullName", { required: true })}
                    />

                    {errors.fullName && toast('wow so easy')}
                </div>

                <div className="space-y-2 text-sm">
                    <label htmlFor="photoURL" className="block ">
                        photoURL
                    </label>

                    <input type="text" name="photoURL" placeholder="photoURL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring "
                        {...register("photoURL")}
                    />

                    {errors.photoURL && toast('wow so easy')}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="email" className="block ">
                        email
                    </label>

                    <input type="text" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                        {...register("email", { required: true })}
                    />

                    {errors.email && toast('plz your email')}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block ">
                        Password
                    </label>

                    <input
                        type={showPassword ? "text": "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                        {...register("password", { required: true })}
                        
                    />
                   
                   <span  onClick={ () => setShowPassword (!showPassword)}>
                       {
                        showPassword ? <FaEyeSlash className="mx-[360px] -mt-8"></FaEyeSlash> : <FaEye className="mx-[360px] -mt-8"></FaEye>
                       }
                        
                        </span>  
                    {errors.password && toast('plz your password')}



                </div>
                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    Log In
                </button>
            </form>

            {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            <SocialLogin></SocialLogin>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                Don&apos;t have an account?
                <Link to='/login' href="#" className="underline hover:text-indigo-600">
                    login
                </Link>
            </p>
        </div>
    );
};

export default Register;