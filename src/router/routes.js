const routes = [
  {
    path: "/",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/account/signup",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Accounts/SignUp.vue") },
    ],
  },
  {
    path: "/account/signin",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Accounts/SignIn.vue") },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("src/layouts/DashboardLayout.vue"),
    children: [{ path: "", component: () => import("pages/Dashboard.vue") }],
  },
  {
    path: "/doctor-profile",
    component: () => import("src/layouts/DocprofileLayout.vue"),
    children: [{ path: "", component: () => import("pages/DocProfile.vue") }],
  },
  {
    path: "/search-result",
    component: () => import("src/layouts/SearchLayout.vue"),
    children: [{ path: "", component: () => import("pages/SearchResult.vue") }],
  },
  {
    path: "/appointments",
    component: () => import("src/layouts/AppointmentLayout.vue"),
    children: [{ path: "", component: () => import("pages/Appointment.vue") }],
  },
  {
    path: "/profile",
    component: () => import("src/layouts/UserprofileLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserProfile.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
