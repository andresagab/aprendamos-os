import react from "react";

const SubtopicActivity = ({activity, show}) => {

    if (show) {
        
        return (

            <div className="w-full h-full p-4">
                <div className="w-full h-full flex">
                    <iframe className="w-full" src={process.env.PUBLIC_URL + "/activities/" + activity.path}></iframe>
                </div>
            </div>

        )

    } else return null;

}

export default SubtopicActivity;