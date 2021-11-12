import React from "react";
import Swal from "sweetalert2";

const HelpButton = ({className, materialIcon, title, message, modalIcon}) => {

    const showAlert = ({}) => 
    {
        
        Swal.fire({
            icon: modalIcon,
            title: title,
            text: message
        });

    }

    return <button onClick={showAlert} className={className}>{materialIcon}</button>

}

export default HelpButton;