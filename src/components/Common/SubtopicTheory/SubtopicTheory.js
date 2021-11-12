import React from "react";
import HelpButton from "../HelpButton/HelpButton";
import SubtopicAudioplayer from "../SubtopicAudioplayer/SubtopicAudioplayer";

const SubtopicTheory = ({subtopic, thematic, show}) => {

    let listItems = null;

    if (subtopic.type === 2) {
        listItems = (
            <div className="w-full flex flex-col space-y-0 items-start">
                {
                    subtopic.items_explanation.map((item) => 
                        <ul className="w-full px-2 rounded-md border-l-2 border-white hover:border-yellow-500 hover:bg-yellow-200 hover:shadow transition duration-300 ease select-none" key={"ie_" + item.title}>
                            <li className="inline-flex items-center space-x-2 font-normal text-sm md:text-md 2xl:text-lg">
                                <span className="text-xl text-yellow-900">&bull;</span>
                                <span>{item.title}</span>
                            </li>
                        </ul>
                    )
                }
            </div>
        )
    }

    if (show) {
        
        return (

            <div className="w-full h-full">

                <div className="w-full h-1/3 max-h-full mb-8 relative rounded-md">
                    <img className="absolute object-cover object-center w-full h-full rounded-md" src={require("./../../../assets/img/material/" + thematic.img).default} alt="" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-black opacity-90"></div>
                    <HelpButton className="absolute top-1 left-2 rounded-full w-min material-icons text-2xl text-white hover:text-yellow-500 transition duration-300 ease-in select-none" materialIcon="help" title="Ayuda de Audio" message="Haz click sobre el botón de play para reproducir el texto, recuerda pausarlo o denerlo antes de cambiar de sección." modalIcon="info"/>
                    <div className="absolute bottom-0 left-0 p-4 2xl:space-y-2 flex flex-col w-full">
                        <h3 className="m-auto font-semibold text-2xl lg:text-4xl 2xl:text-5xl text-white">{thematic.long_title}</h3>
                        <h3 className="m-auto font-normal text-xl lg:text-2xl 2xl:text-3xl text-white">{subtopic.title}</h3>
                        <div className="m-auto pt-2">
                            <SubtopicAudioplayer audioPath={subtopic.audio_path}/>
                        </div>
                    </div>
                </div>

                <div className="m-auto w-11/12 sm:w-10/12 md:w-3/4 flex flex-col space-y-4 items-start justify-start">
                    <p className="font-normal text-md sm:text-lg lg:text-xl 2xl:text-2xl text-justify">{subtopic.long_explanation}</p>
                    {listItems}
                </div>


            </div>

        )

    } else return null;
}

export default SubtopicTheory;