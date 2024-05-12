import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import MiniNavBar from "../components/MiniNavBar";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbLoader2 } from "react-icons/tb";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { VscHistory } from "react-icons/vsc";
import { GrEdit } from "react-icons/gr";

function Profile({ userId, userName, userEmail }) {
  const [authing, setAuthing] = useState(false);
  const [emailAuthing, setEmailAuthing] = useState(false)
  const [addEmail, setAddEmail] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(userEmail){
      setNewEmail(userEmail)
    }
  },[userEmail])

  const handeLogout = () => {
    setAuthing(true);
    setInterval(() => {
      localStorage.clear();
      window.location.reload();
      setAuthing(false);
    }, 500);
  };

  // toggling add email pop up
  const handleAddEmail = () => {
    setAddEmail(true);
  };

  const handleCloseAddEmail = () => {
    setAddEmail(false);
  };

  const handleChangeEmail = async (e) => {
    e.preventDefault();
    setEmailAuthing(true)
    try {
      const updateEmail = await axios.post("http://localhost:3001/updateEmail", {
        newEmail,
        userId,
      });
      if (updateEmail) {
        window.location.reload();
      }
    } catch (err) {
      setEmailAuthing(false)
      console.log(err);
    }
  };

  // checking logged in user
  const loggedInUser = localStorage.getItem("gamezillaUserId");
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/", { replace: true });
    }
  }, [loggedInUser]);
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return loggedInUser !== null ? (
    <div
      className={` relative h-fit flex flex-col gap-3 overflow-x-clip text-text-color  `}
    >
      <Menu />

      {/* add email overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full -z-10  ${
          addEmail ? "transition duration-300 opacity-100 z-50 " : "opacity-0"
        }`}
      >
        <div
          onClick={handleCloseAddEmail}
          className={`h-full w-full absolute top-0 left-0 right-0 bottom-0 m-auto z-10 bg-black/20 `}
        ></div>
        <form
          onSubmit={handleChangeEmail}
          className={` absolute top-0 left-0 right-0 bottom-0 m-auto bg-white dark:bg-container-color h-fit w-fit p-7 z-20 rounded-sm ${
            addEmail
              ? "transition duration-300 translate-y-0  "
              : "translate-y-16 "
          }`}
        >
          <label className="w-full flex flex-col mb-3">
            <span className="flex items-center justify-start gap-1 lowercase p-1 text-black dark:text-white mb-2 select-none ">
              <GrEdit />
              add email
            </span>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="someone@gmail.com"
              className="bg-stone-200  dark:bg-gray-300/10  text-black dark:text-white  py-3 px-4 w-[300px] placeholder:text-text-color-light text-sm  "
            />
          </label>
          <div className="w-full flex justify-end gap-2 ">
            {/* <Link to="/" name='email' className=' w-full h-[40px] px-4 transition bg-border-line-color/60 hover:bg-border-line-color rounded-full text-sm flex items-center justify-center font-medium '>Cancel</Link> */}
            <button
              type="submit"
              name="submit"
              className={` w-1/3 h-[40px] px-4 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium ${
                emailAuthing && "pointer-events-none "
              }`}
            >
              {emailAuthing ? (
                <div className="flex items-center justify-center gap-1">
                  <TbLoader2 className="animate-spinLoader text-[23px] " />
                  <span >Adding</span>
                </div>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>

      <div className=" w-full h-full flex flex-col justify-center items-center p-5 gap-0 max-w-[1100px] mx-auto">
        <p className="font-bold text-black dark:text-text-color text-[20px] capitalize truncate max-w-[90%] leading-[28px] mb-5 ">
          My profile
        </p>
        <div className="w-full h-fit flex flex-col items-center justify-start mb-5">
          <div className="h-[100px] w-fit p-5 aspect-square rounded-full ring-2 ring-black dark:ring-text-color  text-black dark:text-text-color flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 ">
            {userName.charAt(0)}
          </div>
          <p className="font-bold text-black dark:text-text-color text-[25px] leading-[28px] ">
            {userName}
          </p>
          <p className="font-medium text-black/60 dark:text-text-color-light text-base mt-2 flex items-start justify-center ">
            {userEmail ? (
              <span
                className="group gap-1 lowercase p-0 relative max-w-[230px] line-clamp-1 break-words px-7   "
              >
                {userEmail}
                <GrEdit onClick={handleAddEmail} className="absolute top-0 right-1 cursor-pointer hidden group-hover:block"/>
              </span>
            ) : (
              <span
                onClick={handleAddEmail}
                className="flex items-center justify-center gap-1 lowercase p-0 cursor-pointer hover:underline select-none "
              >
                <GrEdit />
                add email
              </span>
            )}
          </p>
          <div className="flex items-center justify-between gap-3 text-black dark:text-text-color w-fit mt-3">
            <span className="w-fit min-w-[170px] flex flex-col justify-center items-center py-3 px-10 transition hover:bg-stone-100 dark:hover:bg-gray-300/10 cursor-pointer   ">
              <h1 className="font-extrabold text-[22px] leading-[25px] truncate max-w-[90%]">
                33
              </h1>
              <p className="capitalize font-medium text-sm  ">
                Games wishlisted
              </p>
            </span>
            <span className="w-fit min-w-[170px] flex flex-col justify-center items-center py-3 px-10 transition hover:bg-stone-100 dark:hover:bg-gray-300/10 cursor-pointer   ">
              <h1 className="font-extrabold text-[22px] leading-[25px] truncate max-w-[90%]">
                30.3K
              </h1>
              <p className="capitalize font-medium text-sm  ">
                Games Purchased
              </p>
            </span>
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <button
              className={` w-full max-w-[200px] h-[40px] px-4 transition bg-stone-100 dark:bg-container-color text-black dark:text-white text-sm flex items-center justify-center font-medium mt-4`}
            >
              Settings
            </button>
            <button
              onClick={handeLogout}
              className={` w-full max-w-[200px] h-[40px] px-4 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium mt-4 ${
                authing && "pointer-events-none "
              }`}
            >
              {authing ? (
                <div className="flex items-center justify-center gap-1">
                  <TbLoader2 className="animate-spinLoader text-[23px] " />
                  <span className="capitalize ">logging out</span>
                </div>
              ) : (
                "Logout"
              )}
            </button>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col p-5">
          <p className="font-bold text-black dark:text-text-color text-[20px] h-fit leading-[28px] capitalize ">
            wishlist <span className="text-base font-normal ">(0)</span>
          </p>
          <div className="flex flex-col justify-center items-center bg-stone-100 dark:bg-container-color w-full h-full min-h-[300px] mt-5">
            <div className="flex flex-col items-center justify-center gap-2 text-black/40 dark:text-text-color/40 ">
              <IoHeartDislikeOutline className="text-[40px]" />
              <p className="text-sm">No items in your wishlist</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col p-5">
          <p className="font-bold text-black dark:text-text-color text-[20px] h-fit leading-[28px] capitalize ">
            Purchase history <span className="text-base font-normal ">(0)</span>
          </p>
          <div className="flex flex-col justify-center items-center bg-stone-100 dark:bg-container-color w-full h-full min-h-[300px] mt-5">
            <div className="flex flex-col items-center justify-center gap-2 text-black/40 dark:text-text-color/40 ">
              <VscHistory className="text-[40px]" />
              <p className="text-sm">You haven't purchased any item yet</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : null;
}

export default Profile;
