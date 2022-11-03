import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Services from "./pages/Services.vue";
import Blog from "./pages/Blog.vue";
import BlogDetail from "./pages/BlogDetail.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import Name from "./pages/Name.vue";

const routes = [
  // { path: '/team-app/',
  //   redirect: '/'
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/detail",
    name: "Blog Detail",
    component: BlogDetail,
  },
  {
    path: "/id/:name",
    name: "Name",
    component: Name,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page Not Found",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
