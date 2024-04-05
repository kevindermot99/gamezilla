import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from '../constants/data';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { WiTime3 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


function Profile() {

    const [color, setColor] = useState("#262626")
    const [sidebar, setSideBar] = useState(false);

    const { id } = useParams();
    

    const openSidebar = () => {
        setSideBar(true)
    }

    const closeSidebar = () => {
        setSideBar(false)
    }
    

    return (
        <main className='relative bg-white dark:bg-dark-body overflow-hidden  h-[100vh]'>

            {/* <div className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div> */}

            <div className='relative text-black dark:text-white flex '>


                <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                    <SideBar closeSidebar={closeSidebar} />
                </div>


                <div className=' w-full overflow-x-clip z-10 h-fit min-h-[300px] max-h-[100vh] overflow-y-auto dynamic-scrollbar '>
                    <Nav openSidebar={openSidebar} />
                    <div>
                        
                    </div>
                </div>

            </div>

        </main>

    )

};

export default Profile;
