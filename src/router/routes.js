import infoRoutes from "./info-routes";
import mobileRoutes from "./mobile-routes";
import webRoutes from "./web-routes";

const routes = [
  infoRoutes,
  mobileRoutes,
  webRoutes,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
