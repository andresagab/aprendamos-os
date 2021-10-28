import React from "react";
import SubtopicTheory from "../SubtopicTheory/SubtopicTheory";
//import Slider from "react-slick";
//import "./styles.css";

const SubtopicSlider = ({subtopic}) => {

    /*const settings = {
        className: "slider",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: null
    };*/

    return (

        <div className="flex w-full h-full">
            <SubtopicTheory subtopic={subtopic}/>
        </div>

        /*
        <div className="w-full h-full px-4">
            <Slider {...settings}>
                
                <div className="w-full h-full">
                    <h3>Teoria</h3>
                </div>
                
                <div>   
                    <h3>Poster</h3>
                </div>
                
                <div>
                    <h3>Video</h3>
                </div>
                
                <div>
                    <h3>Actividad</h3>
                </div>

            </Slider>
        </div>
        */
    )
}

export default SubtopicSlider;