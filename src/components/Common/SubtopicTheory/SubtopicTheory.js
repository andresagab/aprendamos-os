import React from "react";

const SubtopicTheory = ({subtopic, show}) => {

    if (show) {
        
        return (
    
            <div className="m-auto w-full px-16">
                <div className="flex flex-col space-y-16 items-center">
                    <div className="flex flex-row space-x-16 items-center">
                        <div className="flex flex-col space-y-8 items-center justify-center w-2/3">
                            <h3 className="font-semibold text-3xl text-center uppercase text-blue-500">{subtopic.title}</h3>
                            <p className="font-normal text-lg text-justify">{subtopic.long_explanation}</p>
                        </div>
                        <img src="" alt="" className="flex-grow w-32 h-32 bg-indigo-600"/>
                    </div>
                </div>
            </div>
        )

    } else return null;
}

export default SubtopicTheory;