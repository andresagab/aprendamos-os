import React from "react";

// comopnents
import ThematicCard from "../Common/ThematicCard/ThematicCard";

// assets
import data from "../../assets/data/thematics.json";
import imgBackground from "../../assets/img/main/background-A.jpg";

const Thematic = () => {

    const thematics = data;

    return (

        <div className="flex h-screen lg:h-full 2xl:h-screen bg-gray-50 py-20" style={{backgroundImage: `url(${imgBackground})`}}>

            <div className="m-auto px-8 lg:px-0 lg:w-3/6 flex flex-col space-y-8 text-center">
                <h3 className="font-semibold text-6xl text-blue-500">TEMÁTICAS</h3>
                <p>Los sistemas operativos comprenden una gran cantidad de subtemas o puntos que pueden ser estudiados a profundidad por cada uno de nosotros, sin embargo, estudiar todos y cada uno de ellos nos tomaría mucho tiempo, es por esto por lo que hemos seleccionado algunos temas para ti con el fin de que puedas aprender sobre sistemas operativos de forma rápida y entretenida. A continuación, te presentamos los temas disponibles para su estudio, haz click sobre el botón <b>Abrir</b> e inicia el recorrido de cada tema.</p>
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