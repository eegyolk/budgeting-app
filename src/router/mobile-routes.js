const routes = {
  path: "/m/",
  component: () => import("src/layouts/MobileLayout.vue"),
  children: [
    { path: "", component: () => import("pages/mobile/IndexPage.vue") },
  ],
};

export default routes;
