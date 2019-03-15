import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// function loadApp() {
//   return () => import(`@/App.vue`)
// }

// function loadComponent(component: string) {
//   return () => import(`@/components/${component}.vue`)
// }

// function loadMainView(view: string) {
//   return () => import(`@/views/main/${view}.vue`)
// }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: { nolayout: true },
      component: function(reslove) {
        return require(['@/App.vue'], reslove)
      }
    }
    // {
    //   path: '/',
    //   meta: { nolayout: true },
    //   component: function (reslove) {
    //     return require(['@/views/EnterSite'], reslove)
    //   }
    // },
    // {
    //   path: '/aboutme',
    //   meta: {nolayout: false},
    //   component: loadMainView('AboutMe')
    // },
    // {
    //   path: '/experience',
    //   meta: {nolayout: false},
    //   component: loadMainView('Experience')
    // },
    // {
    //   path: '/skill',
    //   meta: {nolayout: false},
    //   component: loadMainView('Skill')
    // },
    // {
    //   path: '/portfolio',
    //   meta: {nolayout: false},
    //   component: loadMainView('Portfolio'),
    //   children: [
    //     {
    //       path: 'design',
    //       meta: {
    //         title: 'Portfolio - Design',
    //         nolayout: false
    //       },
    //       component: loadMainView(`Portfolio`)
    //     },
    //     {
    //       path: 'coding',
    //       meta: {
    //         title: 'Portfolio - Coding',
    //         nolayout: false
    //       },
    //       component: loadMainView(`Portfolio`)
    //     }
    //   ]
    // },
    // {
    //   path: '/contacts',
    //   meta: {nolayout: false},
    //   component: loadMainView(`Contacts`)
    // },
    // {
    //   path: '*',
    //   meta: {nolayout: true},
    //   component: loadComponent(`error/404`)
    // }
  ]
})
