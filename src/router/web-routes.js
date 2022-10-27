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
  {
    path: "/w/verify-account-request",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-verify-account-request",
        component: () =>
          import("src/pages/web/account-creation/VerifyAccountRequestPage.vue"),
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
  {
    path: "/w/verify-reset",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-verify-reset",
        component: () =>
          import("src/pages/web/account-recovery/VerifyResetPage.vue"),
      },
    ],
  },
  {
    path: "/w/reset-password",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-reset-password",
        component: () =>
          import("src/pages/web/account-recovery/ResetPasswordPage.vue"),
      },
    ],
  },

  // Tracker
  {
    path: "/w/tracker/home",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-tracker-home",
        component: () => import("src/pages/web/tracker/HomePage.vue"),
        meta: {
          isTracker: true,
        },
      },
    ],
  },
  {
    path: "/w/tracker/transactions",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-tracker-transactions",
        component: () => import("src/pages/web/tracker/TransactionsPage.vue"),
        meta: {
          isTracker: true,
        },
      },
    ],
  },
  {
    path: "/w/tracker/analytics",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-tracker-analytics",
        component: () => import("src/pages/web/tracker/AnalyticsPage.vue"),
        meta: {
          isTracker: true,
        },
      },
    ],
  },
  {
    path: "/w/tracker/reports",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-tracker-reports",
        component: () => import("src/pages/web/tracker/ReportsPage.vue"),
        meta: {
          isTracker: true,
        },
      },
    ],
  },
  {
    path: "/w/tracker/profile",
    component: () => import("src/layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "w-tracker-profile",
        component: () => import("src/pages/web/tracker/ProfilePage.vue"),
        meta: {
          isTracker: true,
        },
      },
    ],
  },
];

export default routes;
