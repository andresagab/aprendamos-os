import React from "react";

// components
import AppInfo from "../Common/AppInfo/AppInfo";
import Creators from "../Common/Creators/Creators";

const AboutOf = () =>
{
    return (

        <div className="flex h-auto bg-gray-50 py-20">

            <div className="m-auto space-y-8">
                <AppInfo/>
                {/* Authors */}
                <Creators title="Autores" description="Magna ad voluptate magna labore ullamco magna est nisi eiusmod minim labore. Amet ullamco duis ipsum voluptate dolor tempor ex officia sint est. Nisi consequat esse adipisicing in ullamco occaecat occaecat occaecat cupidatat ullamco veniam adipisicing. Officia aliqua qui est cupidatat elit mollit. Amet sit quis Lorem cillum sunt esse cillum et ut eiusmod nostrud. Irure elit laborum proident voluptate et enim dolor anim anim. Adipisicing sint laboris irure minim eiusmod cillum occaecat enim ut minim."/>
                {/* Collaborators */}
                <Creators title="Colaboradores" description="Magna ad voluptate magna labore ullamco magna est nisi eiusmod minim labore. Amet ullamco duis ipsum voluptate dolor tempor ex officia sint est. Nisi consequat esse adipisicing in ullamco occaecat occaecat occaecat cupidatat ullamco veniam adipisicing. Officia aliqua qui est cupidatat elit mollit. Amet sit quis Lorem cillum sunt esse cillum et ut eiusmod nostrud. Irure elit laborum proident voluptate et enim dolor anim anim. Adipisicing sint laboris irure minim eiusmod cillum occaecat enim ut minim."/>
            </div>

        </div>

    );
}

export default AboutOf;