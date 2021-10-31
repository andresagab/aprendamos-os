import react from "react";

const SubtopicImage = ({resource, show}) => {

    if (show) {
        
        return <span className="text-black">Here show a image resource</span>

    } else return null;

}

export default SubtopicImage;