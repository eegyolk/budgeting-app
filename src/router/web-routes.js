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

  // Account creation
  {
    path: "/w/register",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-register",
        component: () =>
          import("src/pages/web/account-creation/RegistrationPage.vue"),
      },
    ],
  },
];

export default routes;
