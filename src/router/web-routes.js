const routes = {
  path: "/w/",
  component: () => import("src/layouts/WebLayout.vue"),
  children: [{ path: "", component: () => import("pages/web/IndexPage.vue") }],
};

export default routes;
