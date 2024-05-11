import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbLoader2 } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo.png";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function SignUp() {
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [pageOut, setPageOut] = useState(false);
  const [authing, setAuthing] = useState(false);

  const navigate = useNavigate();

  if (pageOut) {
    navigate("/", { replace: true });
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleusername = (e) => {
    setUserName(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setAuthing(true);
    if (password == password2) {
      try {
        const response = await axios.post("http://localhost:3001/signup", {
          username,
          email,
          password,
        });

        if (response.status === 201) {
          console.log("account created successful");
          localStorage.setItem("gamezillaUserId", response.data.userId);
          localStorage.setItem("gamezillaUsername", response.data.username);
          setPageOut(true);
          window.location.reload();
        } else {
          // console.log(response.data.message)
          toast(response.data.message, {
            // toastId: "customId"
          });
          setAuthing(false);
        }
      } catch (error) {
        // console.log(error)
        toast(error.response.data.message, {
          // toastId: "customId"
        });
        setAuthing(false);
      }
    } else {
      toast("Passwords doesn't match!", {
        // toastId: "customId"
      });
      setAuthing(false);
    }
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
          Sign up and let's pick up where we left off!
        </p>
        <form
          onSubmit={handleSignUp}
          className=" text-black dark:text-text-color w-full flex flex-col items-start justify-start mt-3 "
        >
          
          <label className="w-full flex flex-col mb-2">
            <h1 className=" text-black dark:text-text-color-light font-medium mb-2 text-sm">
              Username
            </h1>
            <input
              onChange={handleusername}
              name="username"
              type="text"
              minLength={5}
              required
              placeholder="Create username"
              autoComplete="off"
              className=" bg-stone-200  dark:bg-border-line-color/60  py-3 px-4 w-full placeholder:text-text-color-light text-sm "
            />
          </label>
          <label className="w-full flex flex-col mb-4">
            <h1 className=" text-black dark:text-text-color-light font-medium mb-2 text-sm">
              Create a Password
            </h1>
            <input
              onChange={handlePassword}
              type="password"
              required
              placeholder="Create Password"
              autoComplete="off"
              className=" bg-stone-200  dark:bg-border-line-color/60  py-3 px-4 w-full placeholder:text-text-color-light text-sm  "
            />
          </label>
          <label className="w-full flex flex-col mb-4">
            <h1 className=" text-black dark:text-text-color-light font-medium mb-2 text-sm">
              Re-enter Password
            </h1>
            <input
              onChange={handlePassword2}
              type="password"
              required
              placeholder="Re-enter Password"
              autoComplete="off"
              className=" bg-stone-200  dark:bg-border-line-color/60  py-3 px-4 w-full placeholder:text-text-color-light text-sm  "
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
                <span className="capitalize ">creating</span>
              </div>
              ) : (
                "Create account"
              )}
            </button>
          </div>
          <p className="text-sm font-light text-black dark:text-text-color-light self-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-black dark:text-white font-semibold underline">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  ) : null;
}

export default SignUp;
