
import { useRoutes } from "react-router-dom";
import list from './routerMap'

const Router = function () {
    const routes = useRoutes(list);

    return routes;
};

export default Router;
