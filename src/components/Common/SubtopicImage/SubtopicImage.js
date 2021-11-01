import react from "react";

const SubtopicImage = ({resource, show}) => {

    if (show) {
        
        return (

            <div className="w-full h-full flex flex-col lg:flex-row">

                <img className="object-cover w-full lg:w-1/2 rounded-t-md lg:rounded-l-md shadow-md" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="" />

                <div className="m-0 md:m-auto w-full lg:w-1/2 p-4 md:p-16">
                    <h3 className="font-semibold text-2xl lg:text-2xl 2xl:text-3xl text-black">{resource.name}</h3>
                    <p className="font-normal text-md sm:text-lg lg:text-md 2xl:text-xl text-justify">{resource.description}</p>
                </div>

            </div>

        )

    } else return null;

}

export default SubtopicImage;