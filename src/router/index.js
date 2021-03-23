import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {auth: false},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    meta: {auth: false},
    component: () => import('../views/Posts.vue'),
    // children: [
    //   {
    //     path: '/post/:id',
    //     name: 'post',
    //     component: () => import('../views/Detail.vue'),
    //   }
    // ]
  },
  {
    path: '/post/:id',
    name: 'post',
    meta: {auth: false},
    component: () => import('../views/Detail.vue'),
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth) {
    next('/err')
  } else {
    next()
  }
});

export default router