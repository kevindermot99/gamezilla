import { React, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pagesLogo from "./assets/images/pagez-logo.png";
import screenShoot from "./assets/images/screenshoot.png";
import searchbarvid from "./assets/images/search.mp4";
import phoneMockup from "./assets/images/phone-mockup.png";
import mackMockup from "./assets/images/mac-mockup.png";
import downloadOrOpen from "./assets/images/download or Open.mp4";
import { GoArrowUpRight } from "react-icons/go";
import Feature from "./components/Feature";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ButtonLoader from "./components/ButtonLoader";

function Landing() {
  const time = new Date();
  const [signInForm, setSignInForm] = useState(false)
  const [signUpForm, setSignUpForm] = useState(false)

  //sign in 
  const showSignIn = () => {
    setSignInForm(true)
    document.body.style.overflow = 'hidden';
  }
  const hideSignIn = () => {
    setSignInForm(false)
    document.body.style.overflow = '';
  }

  // sign up
  const showSignUp = () => {
    setSignUpForm(true)
    document.body.style.overflow = 'hidden';
  }
  const hideSignUp = () => {
    setSignUpForm(false)
    document.body.style.overflow = '';
  }

  const HeroGradientText =
    "text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-700 max-sm:to-gray-800";

  return (
    <div className=" overflow-clip relative">

      <div 
      className={`w-full h-full relative duration-300 z-40 ${signInForm ? 'fadeIt' : 'hideIt'}`}>
        <SignIn hideSignIn={hideSignIn} showSignUp={showSignUp} />
      </div>

      <div 
      className={`w-full h-full relative duration-300 z-40 ${signUpForm ? 'fadeIt' : 'hideIt'}`}>
        <SignUp hideSignUp={hideSignUp} showSignIn={showSignIn} />
      </div>
      
      <nav className="flex justify-between items-center py-4 px-5 max-w-[1500px] m-auto sticky top-0 bg-white z-10 bg-opacity-85 backdrop-blur-lg">
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="flex justify-start items-center gap-2 text-base font-medium mr-6 "
          >
            <img src={pagesLogo} alt="Logo" className="h-9" />
            <p className="logoText text-black">Pagez</p>
          </Link>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <Link to="/" className="linkText max-lg:hidden">
            Overview
          </Link>
          <Link className="linkText max-lg:hidden">Features</Link>
          <Link className="linkText max-lg:hidden">
            Source code <GoArrowUpRight />
          </Link>
          <div>|</div>
          <button onClick={showSignIn} className="linkText">
            Sign in
          </button>
          <button
            onClick={showSignUp}
            className="px-4 py-2 bg-main-color font-medium text-sm text-white rounded-lg transition hover:opacity-90 max-sm:hidden"
          >
            Sign up
          </button>
        </div>
      </nav>

      <section className=" flex flex-col items-center justify-center text-center px-7 relative max-sm:p-0 max-sm:space-y-6 mt-[80px]">
        <h1 className="font-extrabold  text-[80px] leading-[75px] text-wrap max-w-[900px] max-sm:text-[40px] max-sm:leading-[45px] max-sm:mt-0">
          <span className={`HeroText`}>Infinite </span>
          <span className="text-main-color ">Stories, </span> <br />
          <span className={`HeroText`}>One Library.</span>
        </h1>
        <p className="text-xl font-normal leading-8 max-w-[400px] text-gray-600 text-wrap mt-[30px] max-sm:m-0">
          Enjoy Free Novels Online: No Cost, No Limits, Pure Pleasure!
        </p>

        <Link
          to="/app"
          className="flex items-center justify-center gap-1 font-medium py-3 px-7 rounded-lg mt-10 transition bg-main-color text-white hover:opacity-90 "
        >
          Open Pagez
        </Link>

        <div className="gradient-moving-bg shadow-3xl   flex justify-start items-start max-h-[400px]">
          <img
            src={screenShoot}
            loading="lazy"
            className=" w-full max-w-[1000px] rounded-t-xl "
            alt="screenshot"
          />
        </div>
      </section>

      <section className="w-full bg-white border-t-[1px] border-gray-300 z-10 flex flex-col items-center justify-start p-7">
        <h1 className="mt-10 text-base font-medium leading-8 text-black text-wrap">
          1,241 People has started using Pagez since the Launch
        </h1>

        <Feature
          position="1"
          tip="Easy Find"
          title="Discover with Ease"
          description="Easily find your favorite novels using our simple and intuitive search feature. Navigate through our vast collection effortlessly and dive into captivating stories with just a few clicks."
          direction="left"
          URL={searchbarvid}
        />
        <Feature
          position="2"
          tip="Free Downloads"
          title="Download for Free"
          description="Indulge in a wealth of captivating novels without spending a penny. Enjoy the freedom of unlimited free downloads and explore a world of literary wonders at no cost. common novel formats are:"
          direction="right"
          showFormats="1"
          URL={downloadOrOpen}
        />
      </section>

      <section className="w-full bg-white flex flex-col items-center justify-start px-7">
        <h1 className="text-black text-center opacity-90 font-bold text-[35px] leading-[45px] mb-28">
          <span className=" line-through">Free By Adds</span>
          <br />
          No, It's <span className="text-main-color "> 100% Free.</span>
        </h1>
        <div className="flex items-center justify-evenly  w-full max-w-[900px]">
          <div>
            <h1 className="text-4xl font-extrabold text-black text-wrap max-w-[400px] leading-[50px] mb-4  ">
              Fits seamlessly on{" "}
              <span className="text-main-color ">All Screens</span>
            </h1>
            <p className="font-medium text-base max-w-[420px] leading-relaxed">
              Our web app changes its look to fit small screens. It makes
              everything easy to see and use, no matter if you're using a phone
              or a tablet. So, it's simple and comfortable for everyone to use,
              whether you're on a big computer or a tiny phone.
            </p>
          </div>

          <div className=" overflow-clip  ">
            <img
              src={phoneMockup}
              className="w-[242px] h-[430px]"
              loading="lazy"
            />
          </div>
        </div>

        <p className="my-16 text-xs text-gray-400">
          Disclaimer: i don't own any of these books, this is a School Project
        </p>
      </section>

      <footer className=" py-5 px-5 flex items-center justify-between gap-4 max-sm:block">
        <h1 className="text-gray-400 text-sm font-medium text-wrap">
          &copy; All right to book owners.{" "}
        </h1>
        <h1 className="text-gray-400 text-sm font-medium text-wrap">
          {" "}
          2023 - {time.getFullYear()}{" "}
        </h1>
      </footer>
    </div>
  );
}

export default Landing;
