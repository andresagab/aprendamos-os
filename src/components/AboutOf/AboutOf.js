import React from "react";

// components
import AppInfo from "../Common/AppInfo/AppInfo";
import Creators from "../Common/Creators/Creators";

// assets
import dataAuthors from "../../assets/data/authors.json";
import dataCollaborators from "../../assets/data/collaborators.json";

const AboutOf = () =>
{

    const authors = dataAuthors;
    const collaborators = dataCollaborators;

    return (

        <div className="flex h-auto bg-gray-50 py-20">

            <div className="m-auto space-y-8">
                <AppInfo/>
                {/* Authors */}
                <Creators title="Autores" description="Magna ad voluptate magna labore ullamco magna est nisi eiusmod minim labore. Amet ullamco duis ipsum voluptate dolor tempor ex officia sint est. Nisi consequat esse adipisicing in ullamco occaecat occaecat occaecat cupidatat ullamco veniam adipisicing. Officia aliqua qui est cupidatat elit mollit. Amet sit quis Lorem cillum sunt esse cillum et ut eiusmod nostrud. Irure elit laborum proident voluptate et enim dolor anim anim. Adipisicing sint laboris irure minim eiusmod cillum occaecat enim ut minim." creatorsData={authors}/>
                {/* Collaborators */}
                <Creators title="Colaboradores" description="Magna ad voluptate magna labore ullamco magna est nisi eiusmod minim labore. Amet ullamco duis ipsum voluptate dolor tempor ex officia sint est. Nisi consequat esse adipisicing in ullamco occaecat occaecat occaecat cupidatat ullamco veniam adipisicing. Officia aliqua qui est cupidatat elit mollit. Amet sit quis Lorem cillum sunt esse cillum et ut eiusmod nostrud. Irure elit laborum proident voluptate et enim dolor anim anim. Adipisicing sint laboris irure minim eiusmod cillum occaecat enim ut minim." creatorsData={collaborators}/>
            </div>

        </div>

    );
}

export default AboutOf;