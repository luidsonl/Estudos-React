import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";

function Routes(){
    return(
        <ReactRouterDomRoutes>
            <Route index element={<Home/>}/>
        </ReactRouterDomRoutes>
    )
}

export default Routes;