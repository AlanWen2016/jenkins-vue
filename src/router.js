import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ './views/Test.vue'),
    },
    {
      path: '/award',
      name: 'award',
      component: () => import(/* webpackChunkName: "test" */ './views/Award.vue'),
    },
    {
      path: '/element',
      name: 'element',
      component: () => import(/* webpackChunkName: "test" */ './views/Element.vue'),
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: () => import(/* webpackChunkName: "jsx" */ './views/Jsx.vue'),
    },
    {
      path: '/render',
      name: 'render',
      component: () => import(/* webpackChunkName: "jsx" */ './views/Render.vue'),
    },
  ],
});
