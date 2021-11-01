import react from "react";

const SubtopicActivity = ({activity, show}) => {

    if (show) {
        
        return (

            <div className="w-full h-full p-4">
                <div className="bg-green-100 w-full h-full flex">
                    <span className="m-auto">Actividad Aquí</span>
                </div>
            </div>

        )

    } else return null;

}

export default SubtopicActivity;