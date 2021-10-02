import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/Common/NotFound/NotFound";

// import components used by each route
import Home from "./components/Home/Home";
import Thematic from "./components/Thematic/Thematic";

// define component
const Router = () => {
    
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/temas" component={Thematic} />
                <Route exact path="/acerca-de" component={Thematic} />
                <Route component={NotFound} />
            </Switch>
            
        </BrowserRouter>
    );

}

// export component
export default Router;