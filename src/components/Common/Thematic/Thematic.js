import React from "react";
import NavSubtopics from "../NavSubtopics/NavSubtopics";
import WorkArea from "../WorkArea/WorkArea";

const Thematic = ({thematic}) => {
    return (
        <div className="flex flex-col w-full h-full">
            {/* sub nav of thematic */}
            <NavSubtopics subtopics={thematic.subtopics}/>
            {/* workarea */}
            <WorkArea>
                <div>default data of thematic</div>
            </WorkArea>
        </div>
    )
}

export default Thematic;