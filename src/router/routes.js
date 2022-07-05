const routes = [
  {
    path: "/",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue"), name: "Home" },
    ],
  },
  {
    path: "/account/signup",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Accounts/SignUp.vue"),
        name: "Signup",
      },
    ],
  },
  {
    path: "/account/signin",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Accounts/SignIn.vue"),
        name: "Signin",
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("src/layouts/DashboardLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Dashboard.vue"),
        name: "Dashboard",
      },
    ],
  },
  // {
  //   path: "/doctor-profile",
  //   component: () => import("src/layouts/DocprofileLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("src/pages/Doctors/DocProfile.vue"),
  //       name: "Doctor's Profile",
  //     },
  //   ],
  // },
  {
    path: "/search-result",
    component: () => import("src/layouts/SearchLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SearchResult.vue"),
        name: "Our Doctors",
      },
    ],
  },
  {
    path: "/appointments",
    component: () => import("src/layouts/AppointmentLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Appointment.vue"),
        name: "Appointments",
      },
    ],
  },
  {
    path: "/profile",
    component: () => import("src/layouts/UserprofileLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/UserProfile.vue"),
        name: "Profile",
      },
    ],
  },
  {
    path: "/chat",
    component: () => import("src/layouts/ChatLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Chat.vue"),
        name: "Medics  Messenger",
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
