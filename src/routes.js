import User from "./components/Routing/User/User.vue";
import Home from "./components/Routing/Home.vue";
import UserStart from "./components/Routing/User/UserStart.vue";
import UserDetail from "./components/Routing/User/UserDetail.vue";
import UserEdit from "./components/Routing/User/UserEdit.vue";

import { firstPartRoutes, secondPartRoutes } from "./assets/routesResources";

export const routes = [
  {
    path: "/",
    component: Home,
    alias: ["/hi", "/gutenacht"]
  },
  {
    path: "/user",
    component: User,
    alias: ["/hallo", "/hallo/*"],
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit }
    ]
  }
];
