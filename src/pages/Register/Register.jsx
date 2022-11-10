import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/auth/AuthContext";

import img from "../../assets/image/logo.png";
import GoogleImg from "../../assets/image/google.png";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginProvider, createUser, updateUserProfile } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.imgUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      // setError("Password mast be 8 character long ");
      toast.error("Password mast be 8 character long");
      return;
    }
    console.log(name, imgUrl, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError(false);
        form.reset();
        handleUpdateUserProfile(name, imgUrl);
        toast.success("Account created Successfully.");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, imgUrl) => {
    const profile = {
      displayName: name,
      photoURL: imgUrl,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    setError(false);
    loginProvider(googleProvider)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(true));
  };

  return (
    <section className="bg-gray-100 ">
      <div className="flex justify-center items-center lg:min-h-screen  lg:grid-cols-12">
        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-10 lg:px-10 xl:col-span-6   rounded-md bg-white shadow-xl">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="flex items-center justify-center mb-6">
              <img src={img} alt="" className="h-12 w-12 mr-4" />
              <h1 className="text-4xl  font-semibold text-center  text-gray-800">
                Register
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-4 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="name"
                  onFocus={() => setError(false)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  placeholder="image url"
                  onFocus={() => setError(false)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  placeholder="email"
                  onFocus={() => setError(false)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                />
              </div>

              <div className="col-span-6 ">
                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="password"
                  required
                  onFocus={() => setError(false)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                />
              </div>
              <div className="col-span-6 ">
                {error && (
                  <p className="text-xl text-red-500">Invalid Credential</p>
                )}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md bottom-1 border-2 border-[#1cc65e] bg-white px-8 py-3 text-md font-medium text-[#1cc65e] transition hover:bg-[#1cc65e] hover:text-white focus:outline-none focus:ring active:text-[#1cc65e] "
                >
                  Register
                </button>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  Already have an account ?
                  <Link
                    to={"/login"}
                    className=" text-[#1cc65e] font-semibold  underline "
                  >
                    <span className="ml-1 text-md">Login</span>
                  </Link>
                </p>
              </div>
            </form>
            <hr className="mt-6 border-gray-300 border" />
            <div className="text-center my-4">
              <p className="text-xl text-gray-400">or</p>
            </div>
            <div className="flex justify-between ">
              <button
                onClick={handleGoogleLogin}
                className="py-3 px-6 bg-white border-2 border-[#1cc65e] rounded  mr-4 text-[#1cc65e] text-xl font-medium hover:bg-gray-50 transition"
              >
                {" "}
                <img
                  src={GoogleImg}
                  alt=""
                  className="h-8 w-8 inline-block mr-3"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
