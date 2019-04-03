import User from "./components/Routing/User/User.vue";
import Home from "./components/Routing/Home.vue";

import { firstPartRoutes, secondPartRoutes } from "./assets/routesResources";

export const routes = [
  { path: "/", component: Home, alias: ["/hi", "/gutenacht"] },
  { path: "/user/:id", component: User, alias: ["/hallo", "/hallo/*"] }
];
