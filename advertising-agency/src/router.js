import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("./not-found.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: () => import("./components/home-page.vue"),
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: () => import("./components/sign-in.vue"),
    },
    {
      path: "/registration",
      name: "Regisration",
      component: () => import("./components/the-registration.vue"),
    },
    {
      path: "/naebalivo",
      name: "Naebalovo",
      component: () => import("./components/naebalovo-page.vue"),
    },
  ],
});
