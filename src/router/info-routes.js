const routes = {
  path: "/",
  component: () => import("src/layouts/InfoLayout.vue"),
  children: [{ path: "", component: () => import("pages/info/IndexPage.vue") }],
};

export default routes;
