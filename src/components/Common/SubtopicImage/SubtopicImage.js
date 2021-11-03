import react from "react";

const SubtopicImage = ({resource, show}) => {

    if (show) {
        
        return (

            <div className="w-full h-full flex flex-col lg:flex-row">

                <img className="object-cover w-full lg:w-1/2 rounded-t-md lg:rounded-l-md shadow-md" src={process.env.PUBLIC_URL + require('./../../../assets/img/material/' + resource.resource_path).default} alt="" />

                <div className="m-0 md:m-auto w-full lg:w-1/2 p-4 md:p-16">
                    <h3 className="font-semibold text-2xl lg:text-2xl 2xl:text-3xl text-black">{resource.name}</h3>
                    <p className="font-normal text-md sm:text-lg lg:text-md 2xl:text-xl text-justify">{resource.description}</p>
                </div>

            </div>

        )

    } else return null;

}

export default SubtopicImage;