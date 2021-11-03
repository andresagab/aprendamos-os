import React from "react";
import { Redirect } from "react-router";
import NavSubtopics from "../NavSubtopics/NavSubtopics";
import WorkArea from "../WorkArea/WorkArea";

const Thematic = ({thematic}) => {

    return <Redirect to={thematic.subtopics[0].route}/>

    /*
    return (
        <div className="flex flex-row space-x-4 w-full h-full">
            <NavSubtopics subtopics={thematic.subtopics}/>
            <WorkArea>
                <div>explicar el tema e incluir botón para comenzar</div>
            </WorkArea>
        </div>
    )
    */
}

export default Thematic;