import React from "react";

const AppInfo = () =>
{
    return (

        <div className="m-auto flex flex-row w-3/4 rounded-md shadow-lg bg-white">
            <div className="bg-gray-300 w-1/2"></div>
            <div className="w-1/2 p-6">
                <h3 className="font-semibold text-lg">AprendamosDeSO</h3>
                <p className="font-normal text-left text-sm pt-4">AprendamosDeSo es una aplicación web interactiva que permite al estudiante aprender el significado de sistemas operativos, para qué sirven los sistemas operativos de computadoras y dispositivos móviles y las características básicas de la interfaz gráfica de los sistemas operativos (PC y Móvil), para lograr este cometido el estudiante realizará un recorrido secuencial por las diferentes temáticas planteadas en las que tendrá recursos multimedia y actividades interactivas encargadas de reforzar sus conocimientos.</p>
                <div className="flex flex-col object-bottom pt-10">
                    <div className="inline">
                        <span className="font-semibold text-xs">Versión: </span><span className="font-normal text-xs">1.0</span>
                    </div>
                    <div className="inline">
                        <span className="font-semibold text-xs">Tecnología de desarrollo: </span><span className="font-normal text-xs">React</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AppInfo;