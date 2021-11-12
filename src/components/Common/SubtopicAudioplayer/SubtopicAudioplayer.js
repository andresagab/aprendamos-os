import React, { useState, useEffect, useRef } from "react";

const SubtopicAudioplayer = ({audioPath}) => {

    const audio = useRef(new Audio(require("./../../../assets/audio/" + audioPath).default));

    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        audio.current.play();
    }

    const pauseAudio = () => {
        audio.current.pause();
    }

    const togglePlayer = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? pauseAudio() : playAudio();
    }

    useEffect(() => {
        audio.current.addEventListener('ended', () => setIsPlaying(false));
        return () => {
          audio.current.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);
    
    /*window.addEventListener("change", (evt) =>
    {
        //alert(evt);
        if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
        {
            //window.$_currentlyPlaying.current.pause();
            console.log(window.$_currentlyPlaying);
            //audio.current.pause();
            //setIsPlaying(false);
        } 
        window.$_currentlyPlaying = evt.target;
    }, true);*/

    if (isPlaying) return <button onClick={togglePlayer} className="w-min material-icons text-yellow-400 text-3xl 2xl:text-4xl hover:text-white hover:shadow transition duration-300 ease-in select-none animate-pulse" title="Pausar reproducción">pause_circle</button>
    else return <button onClick={togglePlayer} className="w-min material-icons text-white text-3xl 2xl:text-4xl hover:text-yellow-400 hover:shadow transition duration-300 ease-in select-none animate-bounce" title="Reproducir audio">play_circle</button>

}

export default SubtopicAudioplayer;