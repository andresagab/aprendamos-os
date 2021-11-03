import React from "react";
import NavSubtopics from "../NavSubtopics/NavSubtopics";
import SubtopicSlider from "../SubtopicSlider/SubtopicSlider";
import WorkArea from "../WorkArea/WorkArea";

const Subtopic = ({subtopic, thematic}) => {
    return (
        <div className="flex flex-row space-x-4 w-full h-full">
            {/* sub nav of thematic */}
            <NavSubtopics subtopics={thematic.subtopics}/>
            {/* workarea */}
            <WorkArea>
                <SubtopicSlider subtopic={subtopic} thematic={thematic}/>
            </WorkArea>
        </div>
    )
}

export default Subtopic;