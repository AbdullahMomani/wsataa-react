import { Login , Dashboard } from "../pages"

const routes = [
  {
    path: "/",
    exact: true,
    component: Login,
    name: "Home",
  },
  {
    path: "/dashboard/:id",
    exact: true,
    component: Dashboard,
    name: "Home",
  },
];
const existingRoutes = ["/"];
export { routes, existingRoutes };
