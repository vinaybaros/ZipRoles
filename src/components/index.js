import { createWebHistory, createRouter } from "vue-router";
import Lang from "@/components/Lang.vue";
import Landingpage from "@/components/Landingpage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Lang,
  },
  {
    path: "/landingpage",
    name: "Landingpage",
    component: Landingpage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;