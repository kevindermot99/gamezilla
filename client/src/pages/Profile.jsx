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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile({ userId, userName, userEmail }) {
  const [authing, setAuthing] = useState(false);
  const [emailAuthing, setEmailAuthing] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // get count when page loads
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      const storedCountLength = JSON.parse(storedCount);
      setCartCount(storedCountLength.length);
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      setNewEmail(userEmail);
    }
    if (userName) {
      setNewUserName(userName);
    }
  }, [userEmail, userName]);

  // hide loader fetching when fetched
  useEffect(() => {
    if (userEmail !== null && userName !== null) {
      setFetching(false);
    }
  }, [userName, userEmail]);

  const handeLogout = () => {
    setAuthing(true);
    setInterval(() => {
      localStorage.clear();
      window.location.reload();
      setAuthing(false);
    }, 500);
  };

  // toggling add email pop up
  const handleEditProfile = () => {
    setEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setEditProfile(false);
  };

  const handleChangeEmail = async (e) => {
    e.preventDefault();
    setEmailAuthing(true);
    try {
      const updateUser = await axios.post("http://localhost:3001/updateUser", {
        newUserName,
        newEmail,
        userId,
      });
      if (updateUser.status == 200) {
        localStorage.setItem("gamezillaUserId", userId);
        localStorage.setItem("gamezillaUsername", newUserName);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      setEmailAuthing(false);
      toast(err.response.data.message, {
        // toastId: "customId"
      });
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
      <Menu cartCount={cartCount} />
      <ToastContainer
        className="select-none"
        position="bottom-left"
        draggable
        autoClose={3000}
      />
      {/* edit profile overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full -z-10  ${
          editProfile
            ? "transition duration-300 opacity-100 z-50 "
            : "opacity-0"
        }`}
      >
        <div
          onClick={handleCloseEditProfile}
          className={`h-full w-full absolute top-0 left-0 right-0 bottom-0 m-auto z-10 bg-black/20 dark:bg-black/40 `}
        ></div>
        <form
          onSubmit={handleChangeEmail}
          className={` absolute top-0 left-0 right-0 bottom-0 m-auto bg-white dark:bg-container-color h-fit w-fit p-7 z-20 rounded-md ${
            editProfile
              ? "transition duration-300 translate-y-0  "
              : "translate-y-16 "
          }`}
        >
          <label className="w-full flex flex-col mb-3">
            <span className="flex items-center justify-start gap-1 lowercase p-1 text-black dark:text-white mb-1 select-none text-sm ">
              {/* <GrEdit /> */}
              {userName ? "edit username" : "add username"}
            </span>
            <input
              type="username"
              name="username"
              id="username"
              required
              minLength={5}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="ex: KingKenny"
              className="bg-stone-200  dark:bg-gray-300/10 rounded-md text-black dark:text-white  py-3 px-4 w-[300px] placeholder:text-text-color-light text-sm  "
            />
          </label>
          <label className="w-full flex flex-col mb-3">
            <span className="flex items-center justify-start gap-1 lowercase p-1 text-black dark:text-white mb-1 select-none text-sm ">
              {/* <GrEdit /> */}
              {userEmail ? "edit email" : "add email"}
            </span>
            <input
              type="email"
              name="email"
              id="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="someone@gmail.com"
              className="bg-stone-200  dark:bg-gray-300/10 rounded-md text-black dark:text-white  py-3 px-4 w-[300px] placeholder:text-text-color-light text-sm  "
            />
          </label>
          <div className="w-full flex justify-end gap-2 mt-5 ">
            {/* <Link to="/" name='email' className=' w-full h-[40px] px-4 transition bg-border-line-color/60 hover:bg-border-line-color rounded-full text-sm flex items-center justify-center font-medium '>Cancel</Link> */}
            <button
              type="submit"
              name="submit"
              className={` select-none w-1/3 min-w-fit rounded-md cursor-pointer h-[40px] px-6 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium ${
                emailAuthing && "pointer-events-none "
              }`}
            >
              {emailAuthing ? (
                <div className="flex items-center justify-center gap-1">
                  <TbLoader2 className="animate-spinLoader text-[23px] " />
                  <span>Saving</span>
                </div>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>

      <div className=" w-full h-full flex flex-col justify-center items-center p-5 gap-0 max-w-[1100px] mx-auto">
        {fetching ? (
          <div className="w-full h-full flex items-center justify-start flex-col p-10 opacity-65 dark:opacity-95">
            <div className="h-[100px] w-fit p-5 aspect-square rounded-full bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
            <div className="w-[190px] p-4 rounded-xl bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
            <div className="w-[160px] p-3 rounded-xl bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
            <div className="flex gap-5 mt-4">
              <div className="w-[190px] p-6 rounded-xl bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
              <div className="w-[190px] p-6 rounded-xl bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
            </div>
            <div className="flex flex-col gap-5 mt-10 w-full">
              <div className="w-full h-[300px] p-6 rounded-xl bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
              <div className="w-full h-[300px] p-6 rounded-xl bg-stone-200 dark:bg-container-color animate-pulse  flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 "></div>
            </div>
          </div>
        ) : (
          <>
            <p className="relative font-bold flex w-full justify-center items-center text-black dark:text-text-color text-[20px] capitalize mb-5 ">
              My profile
              <span
                onClick={handleEditProfile}
                title="edit profile"
                className="absolute right-0 top-0 bottom-0 m-auto flex items-center justify-center h-[35px] aspect-square rounded-full cursor-pointer bg-stone-100 dark:bg-container-color hover:bg-stone-200 dark:hover:bg-gray-300/10 active:scale-90 "
              >
                <GrEdit className="  font-medium text-[15px] " />
              </span>
            </p>
            <div className="w-full h-fit flex flex-col items-center justify-start mb-5">
              <div className="h-[100px] w-fit p-5 aspect-square rounded-full ring-2 ring-black dark:ring-text-color  text-black dark:text-text-color flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 ">
                {userName && userName.charAt(0)}
              </div>
              <p className="font-bold text-black dark:text-text-color text-[25px] leading-[28px] ">
                {userName}
              </p>
              <p className="font-medium text-black/60 dark:text-text-color-light text-base mt-2 flex items-start justify-center ">
                {userEmail ? (
                  <span className="group gap-1 lowercase p-0 relative max-w-[350px] line-clamp-1 break-words px-7   ">
                    {userEmail}
                  </span>
                ) : (
                  <span className="group gap-1 lowercase p-0 relative max-w-[350px] line-clamp-1 break-words px-7   ">
                    no email
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
                  className={` w-full max-w-[200px] h-[40px] rounded-md px-4 transition bg-stone-100 dark:bg-container-color text-black dark:text-white text-sm flex items-center justify-center font-medium mt-4`}
                >
                  Settings
                </button>
                <button
                  onClick={handeLogout}
                  className={` w-full max-w-[200px] h-[40px] rounded-md px-4 transition bg-main-color text-white text-sm flex items-center justify-center font-bold mt-4 ${
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
              <div className="flex flex-col justify-center items-center rounded-md bg-stone-100 dark:bg-container-color w-full h-full min-h-[300px] mt-5">
                <div className="flex flex-col items-center justify-center gap-2 text-black/40 dark:text-text-color/40 ">
                  <IoHeartDislikeOutline className="text-[40px]" />
                  <p className="text-sm">No items in your wishlist</p>
                </div>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col p-5">
              <p className="font-bold text-black dark:text-text-color text-[20px] h-fit leading-[28px] capitalize ">
                Purchase history{" "}
                <span className="text-base font-normal ">(0)</span>
              </p>
              <div className="flex flex-col justify-center items-center rounded-md bg-stone-100 dark:bg-container-color w-full h-full min-h-[300px] mt-5">
                <div className="flex flex-col items-center justify-center gap-2 text-black/40 dark:text-text-color/40 ">
                  <VscHistory className="text-[40px]" />
                  <p className="text-sm">You haven't purchased any item yet</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
}

export default Profile;
