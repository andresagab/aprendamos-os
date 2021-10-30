import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// import components used by each route
import Home from "./components/Home/Home";
import NotFound from "./components/Common/NotFound/NotFound";

// components
import NavButton from "./components/Common/NavButton/NavButton";
import Thematic from "./components/Common/Thematic/Thematic";
import Subtopic from "./components/Common/Subtopic/Subtopic";

// asests
import data from "./assets/data/thematics.json";
import icon from "./assets/img/main/icono_color.png"

// define component
const Router = () => {

    const thematics = data;
    
    return (
        <HashRouter>


            {/* navbar */}
            <nav className="mb-4 rounded-lg flex flex-col md:flex-row bg-white items-center justify-center space-x-0 space-y-2 md:space-y-0 md:space-x-4 lg:space-x-5 p-4 shadow">

                <div className="flex flex-row flex-grow items-center space-x-4 cursor-default">
                    <img className="" src={icon} alt=""/>
                    <h3 className="font-normal lg:text-xl">AprendamosDeSO</h3>
                </div>

                {/* home */}
                <NavButton exact to="/" title="Inicio"/>
                {/* loop to show a button nav for each thematic */}
                {
                    thematics.map((item) => (
                        <NavButton key={item.route} to={item.route} title={item.title}/>
                    ))
                }
                {/* about of */}
                <NavButton exact to="/" title="Acerca de"/>

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