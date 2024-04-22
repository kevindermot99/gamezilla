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


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const leftFillWidth = { width: `${(currentTime / duration) * 100}%` };

  return (
    <div className='relative z-10 bg-stone-100 w-full h-[60px] pt-[3px] flex justify-around items-center '>

      <div className='w-full h-[2px] absolute top-0 flex'>
        <div className="absolute h-[2px] bg-main-color rounded-full -z-0" style={leftFillWidth}></div>
        <div className="absolute h-[2px] bg-stone-200 rounded-full -z-10 w-full"></div>
        <input
          type="range"
          className="absolute z-10 appearance-none w-full h-[2px] bg-transparent outline-none cursor-pointer"
          value={currentTime}
          max={duration || 0}
          onChange={(e) => {
            setCurrentTime(e.target.value);
            audioRef.current.currentTime = e.target.value;
          }}
          title='Seek'
        />
      </div>

      <div className='flex gap-2'>
        <img src={res.URL} className={`h-9`} />
        <span className='flex flex-col text-light-text-color'>
          <h1 className='text-xs max-w-[160px] truncate font-medium '>{res.title}</h1>
          <p className='text-xs font-light opacity-70'>{res.author}</p>
        </span>
      </div>
      <div className='flex gap-4'>
        <button><IoShuffleOutline className='text-2xl text-light-text-color transition hover:text-main-color' /></button>
        <button className=''><IoPlaySkipBack className='text-xl text-light-text-color transition hover:text-main-color  ' /></button>
        <button onClick={togglePlay} className='bg-light-text-color hover:bg-main-color transition  text-white h-[35px] w-[35px] flex items-center justify-center rounded-full '>
          {isPlaying ? <IoPause className='text-xl ' /> : <IoPlay className='text-2xl pl-[3px]' />}
        </button>
        <button><IoPlaySkipForward className='text-xl text-light-text-color transition hover:text-main-color' /></button>
        <button><IoRepeat className='text-2xl text-light-text-color transition hover:text-main-color' /></button>
      </div>
      <div className='flex items-center justify-center '>
        <IoVolumeHigh className='text-xl' />
        <input type="range" min={0} max={100} className='ml-2 appearance-none w-[100px] h-1 cursor-pointer rounded-full bg-stone-300 outline-none' />
        <audio ref={audioRef} src={res.audio} />
      </div>
    </div>
  )
}

export default Player