import React from "react";

const AppInfo = () =>
{
    return (

        <div className="m-auto flex flex-row w-3/4 rounded-md shadow-lg bg-white">
            <div className="bg-gray-300 w-1/2"></div>
            <div className="w-1/2 p-6">
                <h3 className="font-semibold text-lg">AprendamosDeSO</h3>
                <p className="font-normal text-left text-sm pt-4">Elit quis magna dolor anim laborum esse id nisi eu ea. Cupidatat et exercitation sit magna ullamco elit qui ea laboris quis. Proident quis ad nisi aliqua ad ea magna. Mollit consectetur mollit voluptate pariatur in in cupidatat nisi qui esse tempor labore.</p>
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