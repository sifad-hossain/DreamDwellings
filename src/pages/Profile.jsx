
import { AiFillHome } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { getAuth } from "firebase/auth";

const Profile = () => {

  const { updateUserProfile, user, setUser } = useContext(AuthContext)
  console.log(user);


//updated user profile
const handleUpdateUserProfile = (name, image) => {
  updateUserProfile( name, image)
  .then((result) => {
    setUser({ ...user, displayName: name, photoURL: image })
  })
 
}
  const handleupdated = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    console.log(name, photoURL);
    handleUpdateUserProfile(name, photoURL)
  }

   

  return (
    <>


      <div className='grid sm:grid-cols-1 lg:flex  w-[90%]  mx-auto pt-24'>

        <Helmet>
          <title>DreamDwellings - Updated Profile</title>
        </Helmet>
        <div className="hero  bg-base-200 w-full lg:w-[45%] mt-10">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Updated Profile</h1>

            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleupdated} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input
                   type="text"
                    placeholder="name" 
                    className="input input-bordered"
                    name="name" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">image</span>
                  </label>
                  <input
                   type="text" 
                   placeholder="PhotoURL" 
                   name="photoURL"
                   className="input input-bordered" />

                </div>
                <button onSubmit={handleUpdateUserProfile}>Updated</button>
              </form>
         
            </div>
          </div>
        </div>





        <div className="flex w-full lg:w-[45%] mx-auto mt-10 h-[400px] bg-gray-100 rounded-2xl  space-x-3 ">
          <div className="w-[40%] lg:w-[50%] mt-28 lg:mt-10 ">
            <img
              data-aos="zoom-in"

              data-aos-duration="1000"
              className="rounded-full"
              src="https://i.ibb.co/3vX30HD/383056171-1486227435462946-2572785117919897583-n.jpg" alt="" />
          </div>

          <div className="sm:w-[60%] lg:w-[50%]  mt-20 px-4">

            <p
              data-aos="fade-left"
              data-aos-delay="1000"
            >Hello, I am</p>
            <h1
              data-aos="fade-left"
              data-aos-delay="1500"
              className="text-2xl font-medium">Md. Niaz Mahmood Sifat</h1>
            <p
              data-aos="fade-left"
              data-aos-delay="1800"
            >Student of Progamming hero</p>
            <p
              data-aos="fade-left"
              data-aos-delay="2000"
            >Lets code your carrer</p>
            <div className="mt-3">
              <p
                data-aos="fade-left"
                data-aos-delay="2200"
                className=" flex gap-2"><FaPhone /> 01945327...</p>

              <p
                data-aos="fade-left"
                data-aos-delay="2300"
                className=" flex gap-2"><CiMail /> sifatniaz14@gmail.com</p>
              <p
                data-aos="fade-left"
                data-aos-delay="2400"
                className=" flex gap-2 text-black"><AiFillHome />Rupganj, Narayngonj</p>
            </div>


            <ul className=" flex h-full mt-10  gap-5">
              <li
                data-aos="fade-up"
                data-aos-delay="2500"
                className="cursor-pointer ">
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="2600"
                className="cursor-pointer">
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="2700"
                className="cursor-pointer">
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </li>
            </ul>







          </div>


        </div>





      </div>








    </>
  );
};

export default Profile;