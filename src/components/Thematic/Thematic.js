import React from "react";

// comopnents
import ThematicCard from "../Common/ThematicCard/ThematicCard";

// assets
import data from "../../assets/data/thematics.json";

const Thematic = () => {

    const thematics = data;

    return (

        <div className="flex h-screen bg-gray-50">

            <div className="m-auto px-8 lg:px-0 lg:w-3/6 flex flex-col space-y-8 text-center">
                <h3 className="font-semibold text-6xl text-blue-500">TEMÁTICAS</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className="flex flex-row items-start justify-center space-x-6">
                    {
                        thematics.map((item) => (
                            <ThematicCard thematic={item}/>
                            ))
                    }
                </div>
            </div>

        </div>

    );

}

export default Thematic;