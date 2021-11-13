import React from "react";

// components
import dataAuthors from "../../assets/data/authors.json";
import dataCollaborators from "../../assets/data/collaborators.json";
import AppInfo from "../Common/AppInfo/AppInfo";
import Creators from "../Common/Creators/Creators";

// assets
import ayudaPDF from "./../../assets/others/AprendamosDeSo-Ayuda.pdf";

const AboutOf = () =>
{

    const authors = dataAuthors;
    const collaborators = dataCollaborators;

    return (

        <div className="flex w-full h-full mb-4 rounded-md">

            <div className="grid grid-flow-row lg:grid-cols-3 gap-4 items-start w-full">

                {/* app info */}
                <div className="w-full h-full">
                    <AppInfo/>
                </div>

                <div className="w-full h-full">
                    {/* creators info */}
                    <Creators title="Autores" description="Magna cillum magna nostrud voluptate Lorem pariatur nisi quis exercitation ut duis commodo. Qui Lorem excepteur reprehenderit culpa ad nostrud incididunt. Laborum in aliqua anim commodo anim voluptate enim et occaecat qui pariatur elit duis consequat." creatorsData={authors}/>
                </div>

                <div className="flex flex-col space-y-4 w-full h-full">
                    {/* creators info */}
                    <Creators title="Colaboradores" description="Magna cillum magna nostrud voluptate Lorem pariatur nisi quis exercitation ut duis commodo. Qui Lorem excepteur reprehenderit culpa ad nostrud incididunt. Laborum in aliqua anim commodo anim voluptate enim et occaecat qui pariatur elit duis consequat." creatorsData={collaborators}/>

                    {/* help info */}
                    <div className="flex-shrink flex flex-row items-center space-x-2 w-full h-max bg-white rounded-lg p-4">
                        <span className="flex-shrink material-icons text-purple-700">help</span>
                        <span className="flex-grow font-semibold">Ayuda</span>
                        <a href={ayudaPDF} target="_blank" className="flex-shrink px-4 py-0 rounded-full text-purple-700 hover:bg-purple-700 hover:text-purple-50 hover:shadow transition duration-300 ease select-none">Abrir</a>
                    </div>

                    {/* help info */}
                    <div className="flex-grow w-full h-full bg-white rounded-lg p-4">
                        <span className="font-semibold text-purple-700">Bibliografia</span>
                        <div className="flex flex-col space-y-2 p-4">
                            <ul>
                                <li className="w-full px-2 rounded-md border-l-2 border-white hover:border-yellow-500 hover:bg-yellow-200 hover:shadow transition duration-300 ease select-none">
                                    <a href="https://concepto.de/sistema-operativo/" target="_blank" className="inline-flex items-center space-x-2 font-normal text-sm md:text-md 2xl:text-lg">
                                        <span className="text-xl text-yellow-900">&bull;</span>
                                        <span>Sistemas Operativos de Escritorio</span>
                                    </a>
                                </li>
                                <li className="w-full px-2 rounded-md border-l-2 border-white hover:border-yellow-500 hover:bg-yellow-200 hover:shadow transition duration-300 ease select-none">
                                    <a href="https://edu.gcfglobal.org/es/informatica-basica/sistemas-operativos-para-el-computador/1/" target="_blank" className="inline-flex items-center space-x-2 font-normal text-sm md:text-md 2xl:text-lg">
                                        <span className="text-xl text-yellow-900">&bull;</span>
                                        <span>Sistemas Operativos de Escritorio</span>
                                    </a>
                                </li>
                                <li className="w-full px-2 rounded-md border-l-2 border-white hover:border-yellow-500 hover:bg-yellow-200 hover:shadow transition duration-300 ease select-none">
                                    <a href="https://edu.gcfglobal.org/es/ipad/sistema-operativo-movil-ios/1/" target="_blank" className="inline-flex items-center space-x-2 font-normal text-sm md:text-md 2xl:text-lg">
                                        <span className="text-xl text-yellow-900">&bull;</span>
                                        <span>Sistemas Operativos de Dispositivos Móviles</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default AboutOf;