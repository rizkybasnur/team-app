import { createWebHistory, createRouter } from "vue-router";
import {
  getAuth,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
  // signOut,
} from "firebase/auth";
import Home from "./components/Home.vue";
import Services from "./pages/Services.vue";
import SignIn from "./pages/SignIn.vue";
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
    meta: {
      requiresAuth: true,
    },
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
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
