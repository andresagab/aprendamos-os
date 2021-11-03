import react from "react";

const SubtopicImage = ({resource, show}) => {

    if (show) {
        
        return (

            <div className="w-full h-full flex flex-col lg:flex-row">

                <img className="bg-contain bg-center w-full lg:w-2/3 rounded-t-md lg:rounded-l-md shadow-md" src={require('./../../../assets/img/material/' + resource.resource_path).default} alt="" />

                <div className="m-0 md:m-auto w-full lg:w-1/3 p-4 md:p-16">
                    <h3 className="font-semibold text-2xl lg:text-2xl 2xl:text-3xl text-black">{resource.name}</h3>
                    <p className="font-normal text-md sm:text-lg lg:text-md 2xl:text-xl text-justify">{resource.description}</p>
                </div>

            </div>

        )

    } else return null;

}

export default SubtopicImage;