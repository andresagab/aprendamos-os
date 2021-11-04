import React, { useState } from "react";
import Swal from "sweetalert2";

// components
import IconButton from "../IconButton/IconButton";
import SubtopicActivity from "../SubtopicActivity/SubtopicActivity";
import SubtopicImage from "../SubtopicImage/SubtopicImage";
import SubtopicTheory from "../SubtopicTheory/SubtopicTheory";
//import Slider from "react-slick";
//import "./styles.css";

const SubtopicSlider = ({subtopic, thematic}) => {

    const [showTheory, setShowTheory] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showActivity, setShowActivity] = useState(false);

    const showAlert = ({}) => 
    {
        
        Swal.fire({
            icon: 'info',
            title: 'Ayuda de Botones',
            text: 'Los botones de color morado ubicados en la parte inferior de la pantalla te permiten acceder a la explicación teorica, imagen illustrativa y la actividad del subtema.'
        });

    }

    function showElement (element) {

        switch(element) {
            case 'theory':
                setShowTheory(true);
                setShowImage(false);
                setShowActivity(false);
                break;
            case 'image':
                setShowTheory(false);
                setShowImage(true);
                setShowActivity(false);
                break;
            case 'activity':
                setShowTheory(false);
                setShowImage(false);
                setShowActivity(true);
                break;
            default:
                setShowTheory(true);
                setShowImage(false);
                setShowActivity(false);
                break;
        }

    }

    return (

        <div className="relative flex w-full h-screen md:h-full">
            <SubtopicTheory subtopic={subtopic} thematic={thematic} show={showTheory}/>
            <SubtopicImage resource={subtopic.resources[0]} show={showImage}/>
            <SubtopicActivity activity={subtopic.activity} show={showActivity}/>
            <div className="absolute bottom-0 pb-4 w-full flex flex-row items-center justify-center space-x-2">
                <IconButton onClick={() => showElement('theory')} icon="description" bgColor="bg-indigo-500" hoverColor="bg-indigo-700" textColor="text-indigo-50" title="Ver Explicación"/>
                <IconButton onClick={() => showElement('image')} icon="image" bgColor="bg-indigo-500" hoverColor="bg-indigo-700" textColor="text-indigo-50" title="Ver Imagen Descriptiva"/>
                <IconButton onClick={() => showElement('activity')} icon="task" bgColor="bg-indigo-500" hoverColor="bg-indigo-700" textColor="text-indigo-50" title="Abrir Actividad"/>
                <IconButton onClick={showAlert} icon="help" bgColor="bg-indigo-500" hoverColor="bg-indigo-700" textColor="text-indigo-50" title="Ver ayuda"/>
            </div>
        </div>

    )
}

export default SubtopicSlider;