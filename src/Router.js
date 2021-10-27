import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

// import components used by each route
import Home from "./components/Home/Home";
import Thematic from "./components/Thematic/Thematic";
import AboutOf from "./components/AboutOf/AboutOf";
import NotFound from "./components/Common/NotFound/NotFound";
import Topic from "./components/Topic/Topic";
import Subtopic from "./components/Subtopic/Subtopic";

// define component
const Router = () => {
    
    return (
        <HashRouter>
            {/*<BrowserRouter>*/}

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/temas" component={Thematic} />
                    <Route exact path="/acerca-de" component={AboutOf} />
                    <Route exact path="/temas/:tema" component={Topic} />
                    <Route exact path="/temas/:tema/:subtema" component={Subtopic} />
                    <Route component={NotFound} />
                </Switch>
                
            {/*</BrowserRouter>*/}
        </HashRouter>
    );

}

// export component
export default Router;