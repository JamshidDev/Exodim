import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/statistic',
    name: 'statistic',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/StatisticPage.vue')
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SettingPage.vue')
    }
  },
  {
    path: '/employees',
    name: 'employees',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/EmployeesPage.vue')
    },
    
  },
  {
    path: '/companies',
    name: 'companies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CompanyPage.vue')
    },
    
  },
  {
    path: '/position',
    name: 'position',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PositionPage.vue')
    },
    
  },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MapPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
