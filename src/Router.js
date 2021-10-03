import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components used by each route
import Home from "./components/Home/Home";
import Thematic from "./components/Thematic/Thematic";
import AboutOf from "./components/AboutOf/AboutOf";
import NotFound from "./components/Common/NotFound/NotFound";
import Topic from "./components/Topic/Topic";

// define component
const Router = () => {
    
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/temas" component={Thematic} />
                <Route exact path="/acerca-de" component={AboutOf} />
                <Route exact path="/temas/:tema" component={Topic} />
                <Route component={NotFound} />
            </Switch>
            
        </BrowserRouter>
    );

}

// export component
export default Router;