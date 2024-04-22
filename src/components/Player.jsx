import React, { useState, useRef, useEffect } from 'react'
import { Books } from '../constants/data'
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";

function Player() {

  const id = 'book1';
  const res = Books.find(book => book.id === id);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='z-10 bg-stone-100 w-full h-[55px] flex justify-around items-center border-t border-t-light-border-line'>
      <input
        type="range"
        className="appearance-none w-full h-4 rounded-full bg-gray-300 outline-none"
        value={currentTime}
        max={duration || 0}
        onChange={handleSeek}
      />
      <div className='flex gap-2'>
        <img src={res.URL} className={`h-9`} />
        <span className='flex flex-col text-light-text-color'>
          <h1 className='text-xs max-w-[160px] truncate font-medium '>{res.title}</h1>
          <p className='text-xs font-light opacity-70'>{res.author}</p>
        </span>
      </div>
      <div className='flex gap-4'>
        <button><IoShuffleOutline className='text-2xl' /></button>
        <button className=''><IoPlaySkipBack className='text-xl' /></button>
        <button onClick={togglePlay} className='bg-main-color text-white h-[35px] w-[35px] flex items-center justify-center rounded-full '>
          
          {isPlaying ? <IoPause className='text-xl ' /> : <IoPlay className='text-2xl pl-[3px]' />}
        </button>
        <button><IoPlaySkipForward className='text-xl' /></button>
        <button><IoRepeat className='text-2xl' /></button>
      </div>
      <div className='flex items-center justify-center '>
        <IoVolumeHigh className='text-2xl' />
        <input type="range" className='ml-2 appearance-none w-full h-1 rounded-full bg-stone-300  outline-none' />
        <audio ref={audioRef} src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" />
      </div>
    </div>
  )
}

export default Player