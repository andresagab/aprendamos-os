import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

// import components used by each route
import Home from "./components/Home/Home";
import NotFound from "./components/Common/NotFound/NotFound";

// asests
import data from "./assets/data/thematics.json";
import NavButton from "./components/Common/NavButton/NavButton";
import Thematic from "./components/Common/Thematic/Thematic";
import Subtopic from "./components/Common/Subtopic/Subtopic";

// define component
const Router = () => {

    const thematics = data;
    
    return (
        <HashRouter>


            {/* navbar */}
            <nav className="flex flex-row bg-white items-center justify-center space-x-4 p-4 shadow">

                {/* default links */}
                <NavLink exact to="/" activeClassName="border-2 border-yellow-800 rounded-full shadow-md">
                    <NavButton title="Inicio"/>
                </NavLink>
                {/* loop to show a button nav for each thematic */}
                {
                    thematics.map((item) => (
                        <NavLink exact to={item.route} key={item.slug} activeClassName="border-2 border-yellow-800 rounded-full shadow-md">
                            <NavButton title={item.title}/>
                        </NavLink>
                    ))
                }

            </nav>

            {/*<BrowserRouter>*/}

                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* loop to define routes to each thematic */}
                    {
                        thematics.map((item) => (
                            <Route exact path={item.route} key={item.slug}>
                                <Thematic thematic={item}/>
                            </Route>
                        ))
                    }
                    {/* loop to define routes to each subtopics of thematic */}
                    {
                        thematics.map((item) => (
                            item.subtopics.map((subitem) => (
                                <Route exact path={subitem.route} key={subitem.slug}>
                                    <Subtopic thematic={item} subtopic={subitem}/>
                                </Route>
                            ))
                        ))
                    }
                    <Route component={NotFound} />
                </Switch>
                
            {/*</BrowserRouter>*/}
        </HashRouter>
    );

}

// export component
export default Router;