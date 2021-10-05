import React from "react";
import { useParams } from "react-router";

// components
import ThematicCard from "../Common/ThematicCard/ThematicCard";

// assets
import data from "../../assets/data/thematics.json";
import imgBackground from "../../assets/img/main/background-A.jpg";
import BackButton from "../Common/BackButton/BackButton";

const Thematic = () => {

    const params = useParams();
    const thematics = data;

    return (

        <div className="flex h-screen bg-gray-50" style={{backgroundImage: `url(${imgBackground})`}}>
            {
                thematics.filter(item => item.slug === params.tema).map((item) => (

                    <div key={item.slug} className="m-auto px-10 w-full flex flex-row items-center space-x-16 text-center">
                        
                        <div className="flex flex-col items-start space-y-6">
                            <h3 className="flex-shrink w-min font-semibold text-5xl text-blue-500 text-left uppercase">{item.title}</h3>
                            <BackButton route="/temas"/>
                        </div>
                        <div className="flex flex-row items-start justify-end space-x-6">
                            {
                                item.subtopics.map((subtopic) => (
                                    <ThematicCard key={subtopic.slug} thematic={subtopic}/>
                                    ))
                            }
                        </div>
                    </div>
                    
                ))
            }

        </div>

    );

}

export default Thematic;