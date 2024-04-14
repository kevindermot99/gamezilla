import React, { useEffect, useState } from 'react'
import { SlCompass } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { Books } from '../constants/data';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoTrendingUp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { PiMusicNotesPlusDuotone } from "react-icons/pi";
import LogoDarkMode from '../assets/images/Pagez_Logo__dark_mode.png'
import { BsCloudDownload } from "react-icons/bs";
import { AppVersion } from '../constants/data';
import { users } from "../constants/data";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

function BottomBar() {

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user) {
        return user.id === id;
    }

  return (
    <div className='fixed bottom-3 z-50'>BottomBar</div>
  )
}

export default BottomBar