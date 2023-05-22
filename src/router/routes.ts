import { Login , Dashboard , Root} from "../pages"

const routes = [
  {
    path: "/",
    exact: true,
    component: Root,
    name: "Home",
  },
  {
    path: "/wsataa-dasboard",
    exact: true,
    component: Login,
    name: "Home",
  },
  {
    path: "/wsataa-dasboard/dashboard/:id",
    exact: true,
    component: Dashboard,
    name: "Home",
  },
];
const existingRoutes = ["/wsataa-dasboard"];
export { routes, existingRoutes };
