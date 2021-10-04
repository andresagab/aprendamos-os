import React from "react";
import { Link } from "react-router-dom";

// assets
import imgBackground from "../../assets/img/main/home-background.jpg";

class Home extends React.Component {
    render() {
        return (

            /*<div class="bg-no-repeat bg-cover bg-center static bg-yellow-100 h-screen w-full">*/
            <div className="flex h-screen" style={{backgroundImage: `url(${imgBackground})`}}>

                <div className="m-auto p-4 rounded-lg bg-opacity-80 lg:w-3/6 flex flex-col space-y-4 text-center bg-white">
                    <h3 className="font-semibold text-6xl">APRENDAMOS DE SO</h3>
                    <p>Estimados estudiantes les damos la bienvenida a la aplicación web AprendamosDeSO, espacio donde aprenderá aspectos relacionados con el significado de sistemas operativos, para qué sirven los sistemas operativos de computadoras y dispositivos móviles, y por último encontrará, características básicas de la interfaz gráfica en sistemas operativos de computadoras y dispositivos móviles. Esperamos que sea de su agrado y utilidad!</p>
                    <Link to="/temas" className="mt-8 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-700 transition duration-300 ease select-all w-40 self-center">Empezar</Link>
                </div>

            </div>

        );
    }
}

export default Home;