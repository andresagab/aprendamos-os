import React from "react";
import NavSubtopics from "../NavSubtopics/NavSubtopics";
import WorkArea from "../WorkArea/WorkArea";

const Thematic = ({thematic}) => {
    return (
        <div className="flex flex-row space-x-4 w-full h-full">
            {/* sub nav of thematic */}
            <NavSubtopics subtopics={thematic.subtopics}/>
            {/* workarea */}
            <WorkArea>
                <div>explicar el tema e incluir botón para comenzar</div>
            </WorkArea>
        </div>
    )
}

export default Thematic;