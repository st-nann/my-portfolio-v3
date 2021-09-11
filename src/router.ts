import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadApp() {
  return () => import(`@/App.vue`)
}

function loadComponentBase(component: string) {
  return () => import(`@/components/base/${component}.vue`)
}

function loadMainView(view: string) {
  return () => import(`@/views/main/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: { title: 'Enter site', nolayout: true },
      component: () => import(`@/views/EnterSite.vue`)
    },
    {
      path: '/aboutme',
      meta: { title: 'About me', nolayout: false },
      component: loadMainView('AboutMe')
    },
    {
      path: '/experience',
      meta: { title: 'Experience', nolayout: false },
      component: loadMainView('Experience')
    },
    {
      path: '/skill',
      meta: { title: 'Skill', nolayout: false },
      component: loadMainView('Skill')
    },
    {
      path: '/portfolio',
      meta: { title: 'Portfolio', nolayout: false },
      component: loadMainView('Portfolio'),
      children: [
        {
          path: 'design',
          meta: {
            title: 'Portfolio - Design',
            nolayout: false
          },
          component: loadMainView(`Portfolio`)
        },
        {
          path: 'coding',
          meta: {
            title: 'Portfolio - Coding',
            nolayout: false
          },
          component: loadMainView(`Portfolio`)
        }
      ]
    },
    {
      path: '/contacts',
      meta: { title: 'Contacts', nolayout: false },
      component: loadMainView(`Contacts`)
    },
    {
      path: '*',
      meta: { title: 'Error - 404', nolayout: true },
      component: loadComponentBase(`error/404`)
    }
  ]
})
