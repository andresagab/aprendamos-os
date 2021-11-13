import React from "react";

const Evaluation = () => {

    return (
        <div className="w-full h-full p-4">
            <div className="w-full h-full flex">
                <iframe className="w-full" src={process.env.PUBLIC_URL + "/activities/aprendamos_so_evaluacion/index.html"}></iframe>
            </div>
        </div>
    )

}

export default Evaluation;