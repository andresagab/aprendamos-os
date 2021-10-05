import React from "react";

// components
import AppInfo from "../Common/AppInfo/AppInfo";
import Creators from "../Common/Creators/Creators";

// assets
import dataAuthors from "../../assets/data/authors.json";
import dataCollaborators from "../../assets/data/collaborators.json";
import imgBackground from "../../assets/img/main/background-A.jpg";

const AboutOf = () =>
{

    const authors = dataAuthors;
    const collaborators = dataCollaborators;

    return (

        <div className="flex h-auto bg-gray-50 py-20" style={{backgroundImage: `url(${imgBackground})`}}>

            <div className="m-auto space-y-8">
                <AppInfo/>
                {/* Authors */}
                <Creators title="Autores" description="Es de nuestro agrado compartirles la información de contacto de los autores del software educativo AprendamosDeSO, estas personas se encargaron de estudiar las unidades presentadas en esta aplicación con el objetivo de diseñar el contenido de temático que es abarcado en cada sección de la aplicación, todos los recursos multimedia y de software son autoría de las siguientes personas:" creatorsData={authors}/>
                {/* Collaborators */}
                <Creators title="Colaboradores" description="En esta sección te compartimos la información de contacto correspondiente a los colaboradores en el desarrollo de este software educativo, cada integrante presentado a continuación tuvo una gran relevancia en el desarrollo de la aplicación web:" creatorsData={collaborators}/>
            </div>

        </div>

    );
}

export default AboutOf;