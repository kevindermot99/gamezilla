import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbLoader2 } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo.png";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [authing, setAuthing] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthing(true);
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        localStorage.setItem("gamezillaUserId", response.data.userId);
        localStorage.setItem("gamezillaUsername", response.data.username);
        setAuthing(false);
        window.location.reload();
      } else {
        console.log("Login Failed");
        setAuthing(false);
      }
    } catch (error) {
      console.log(error);
      toast(error.response.data.message, {
        // toastId: "customId"
      });
      setAuthing(false);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // checking logged in user
  const userId = localStorage.getItem("gamezillaUserId");
  useEffect(() => {
    if (userId) {
      navigate("/", { replace: true });
    }
  }, [userId]);

  return userId === null ? (
    <div className="px-5 flex items-center justify-center min-h-[100vh]  w-full bg-white dark:bg-body-color pb-14">
      <ToastContainer
        className="select-none"
        position="bottom-right"
        draggable
        autoClose={3000}
      />
      <div className="h-fit w-full max-w-[350px] flex items-start justify-center flex-col">
        <Link
          to={`/`}
          className="text-black dark:text-text-color-light bg-stone-200 dark:bg-border-line-color/60 p-1 aspect-square rounded-full"
        >
          <MdOutlineKeyboardBackspace className="text-lg " />
        </Link>
        <div className="font-bold text-[30px] h-fit leading-[30px] tracking-tighter flex flex-col items-center justify-start w-full gap-0 mb-1 ">
          <img src={Logo} className="h-16" />
          Gamezilla
        </div>

        <p className="mb-5 text-black/60 dark:text-text-color-light text-center font-medium text-sm w-full">
          Login and let's pick up where we left off!
        </p>

        <form
          onSubmit={handleLogin}
          className=" text-black dark:text-text-color w-full flex flex-col items-start justify-start mt-3 "
        >
          <label className="w-full flex flex-col mb-3">
            <h1 className=" text-black dark:text-text-color-light font-medium mb-2 text-sm">
              Username
            </h1>
            <input
              onChange={handleUsername}
              type="text"
              name="email"
              autoComplete="off"
              placeholder="username"
              className="bg-stone-200  dark:bg-border-line-color/60  py-3 px-4 w-full placeholder:text-text-color-light text-sm  "
            />
          </label>
          <label className="w-full flex flex-col mb-3">
            <h1 className=" text-black dark:text-text-color-light font-medium mb-2 text-sm">
              Password
            </h1>
            <input
              onChange={handlePassword}
              type="password"
              name="password"
              placeholder="Password"
              className="bg-stone-200  dark:bg-border-line-color/60  py-3 px-4 w-full placeholder:text-text-color-light text-sm   "
            />
          </label>
          <div className="w-full flex gap-2 mb-4 mt-2 ">
            {/* <Link to="/" name='email' className=' w-full h-[40px] px-4 transition bg-border-line-color/60 hover:bg-border-line-color rounded-full text-sm flex items-center justify-center font-medium '>Cancel</Link> */}
            <button
              type="submit"
              name="submit"
              className={` w-full h-[40px] px-4 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium ${
                authing && "pointer-events-none "
              }`}
            >
              {authing ? (
                <div className="flex items-center justify-center gap-1">
                  <TbLoader2 className="animate-spinLoader text-[23px] " />
                  <span className="capitalize ">logging in</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
          {/* <a className=" text-black dark:text-white font-semibold underline flex text-sm self-center mt-3">
            {" "}
            Forgot Password?
          </a> */}
          <p className="text-sm font-light text-black dark:text-text-color-light self-center mt-2">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-black dark:text-white font-semibold underline"
            >
              {" "}
              Sign up{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  ) : null;
}

export default Login;
