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
  {
    path: "/w/verify-account",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-verify-account",
        component: () =>
          import("src/pages/web/account-creation/VerifyAccountPage.vue"),
      },
    ],
  },

  // Account recovery
  {
    path: "/w/forgot-password",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-forgot-password",
        component: () =>
          import("src/pages/web/account-recovery/ForgotPasswordPage.vue"),
      },
    ],
  },
];

export default routes;
