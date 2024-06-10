import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExperienceView.vue"),
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectView.vue"),
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
    meta: {
      layout: "DefaultLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
