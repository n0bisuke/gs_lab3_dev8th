// export default ({ store, redirect }) => {
//   // ユーザーが認証されていないとき
//   if (!store.getters.currentUser) {
//     console.log(store.getters)
//     // return redirect('/Signin')
//   }
// }
export default ({ app, store, redirect }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    let user = store.getters.currentUser
    console.log(user)
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    console.log(to.matched)
    if (!user && requiresAuth) {
      next({
        path: '/Signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
    next()
  })
}
