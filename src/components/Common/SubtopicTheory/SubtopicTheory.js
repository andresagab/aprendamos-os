import React from "react";

const SubtopicTheory = ({subtopic, thematic, show}) => {

    if (show) {
        
        return (

            <div className="w-full h-full">

                <div className="w-full h-1/3 max-h-full mb-8 relative rounded-md">
                    <img className="absolute object-cover w-full h-full rounded-md" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-black opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-4 2xl:space-y-2 flex flex-col w-full">
                        <h3 className="m-auto font-semibold text-2xl lg:text-4xl 2xl:text-5xl text-white">{thematic.long_title}</h3>
                        <h3 className="m-auto font-normal text-xl lg:text-2xl 2xl:text-3xl text-white">{subtopic.title}</h3>
                    </div>
                </div>

                <div className="m-auto w-11/12 sm:w-10/12 md:w-2/3">
                    <p className="font-normal text-md sm:text-lg lg:text-xl 2xl:text-2xl text-justify">{subtopic.long_explanation}</p>
                </div>

            </div>

        )

    } else return null;
}

export default SubtopicTheory;