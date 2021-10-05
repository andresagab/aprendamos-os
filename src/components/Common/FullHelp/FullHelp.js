import React from "react";

const FullHelp = () =>
{
    return (

        <div className="m-auto flex flex-col items-center w-3/4 rounded-md shadow-lg bg-white p-6 space-y-6">
            <h3 className="font-semibold text-3xl text-center">AYUDA</h3>
            <p className="font-normal text-sm text-center">Haciendo click sobre siguente botón encontraras un Documento con la ayuda básica sobre la usabilidad del software educativo</p>
            <a className="px-4 py-2 font-normal text-sm bg-green-500 rounded-full w-max text-white" target="_blank" href="https://drive.google.com/file/d/1BTLDxaOYVH9BnyevvEVMBWKAF-9Rf9CJ/view?usp=sharing">Abrir Ayuda</a>
        </div>

    );
}

export default FullHelp;