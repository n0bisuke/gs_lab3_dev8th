import Vue from 'vue'
import routes from './routes'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (store.getters['auth/user'].auth !== true) {
      next({
        path: '/signin',
        // query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
