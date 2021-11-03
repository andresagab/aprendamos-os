import React from "react";

// assets
import logo from "../../../assets/img/main/logo_cl.jpg"

const AppInfo = () => {

    return (

        <div className="flex flex-col w-full h-full bg-white rounded-lg shadow">

            <img className="w-full shadow-md rounded-lg" src={logo} alt=""/>
            <div className="w-full h-full p-4 flex flex-col bg-gray-white">
                
                <h3 className="font-semibold text-xl 2xl:text-2xl text-red-500 mt-4">AprendamosDeSo</h3>
                <p className="flex-grow font-normal text-left text-sm 2xl:text-lg pt-4">AprendamosDeSo es una aplicación web interactiva que permite al estudiante aprender el significado de sistemas operativos de computadoras y dispositivos móviles, sus elementos básicos y ejemplos de cada uno, para lograr este cometido el estudiante realizará un recorrido secuencial por las diferentes temáticas planteadas en las que tendrá recursos multimedia y actividades interactivas encargadas de reforzar sus conocimientos.</p>
                <div className="flex-shrink flex flex-col object-bottom">
                    <div className="inline">
                        <span className="font-semibold text-xs">Versión: </span><span className="font-normal text-xs">1.1</span>
                    </div>
                    <div className="inline">
                        <span className="font-semibold text-xs">Tecnología de desarrollo: </span><span className="font-normal text-xs">React</span>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default AppInfo;