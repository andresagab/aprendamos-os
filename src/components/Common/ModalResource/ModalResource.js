import React from "react";

const ModalResource = ({resource, show, onClose}) => {

    if (!show) return null;
    else {
        
        return(
            
            <div className="fixed left-0 bottom-0 w-full h-full z-20 inset-0 overflow-y-auto flex justify-center items-cente bg-black bg-opacity-50 transition-transform">
    
                <div className="m-auto w-1/2 bg-white rounded-lg p-4 flex flex-col items-start space-y-4">
                    {/* Header */}
                    <div className="flex flex-row w-full items-center pb-2 border-b border-gray-300">
                        <h3 className="flex-grow font-semibold text-xl text-indigo-700 uppercase">{resource.name}</h3>
                        <button onClick={onClose} className="flex-grow-0 px-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease select-none">x</button>
                    </div>
                    {/* Body */}
                    <div className="flex flex-col w-full items-start justify-start pb-2 border-b border-gray-300">
                        <p className="font-normal text-sm text-gray-700 text-justify">{resource.description}</p>
                        <div></div>
                    </div>
                    {/* Footer */}
                    <div className="flex flex-row w-full items-center justify-end">
                        <button onClick={onClose} className="w-28 font-normal text-sm py-1 rounded-full bg-green-500 text-white hover:bg-green-700 transition duration-300 ease select-none">Completar</button>
                    </div>
                </div>
    
            </div>
    
        )

    }


}

export default ModalResource;