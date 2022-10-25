const routes = [
  // Authentication
  {
    path: "/w/login",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-login",
        component: () => import("src/pages/web/authentication/LoginPage.vue"),
      },
    ],
  },
];

export default routes;
