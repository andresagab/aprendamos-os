import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

// import components used by each route
import Home from "./components/Home/Home";
import NotFound from "./components/Common/NotFound/NotFound";

// define component
const Router = () => {
    
    return (
        <HashRouter>
            {/*<BrowserRouter>*/}

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
                
            {/*</BrowserRouter>*/}
        </HashRouter>
    );

}

// export component
export default Router;