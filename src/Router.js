import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components used by each route

// define component
const Router = () => {
    
    return (
        <BrowserRouter>
            <switch>
                <Route exact path="/"/>
            </switch>
        </BrowserRouter>
    )

}

// export component
export default Router;