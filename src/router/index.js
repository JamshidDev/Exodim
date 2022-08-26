import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../Layout/Layout.vue')
    },
    children:[
      {
        path: '/admin/statistic',
        name: 'statistic',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/StatisticPage.vue')
        }
      },
      {
        path: '/admin/setting',
        name: 'setting',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/SettingPage.vue')
        }
      },
      {
        path: '/admin/employees',
        name: 'employees',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/EmployeesPage.vue')
        },
        
      },
      {
        path: '/admin/companies',
        name: 'companies',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/CompanyPage.vue')
        },
        
      },
      {
        path: '/admin/position',
        name: 'position',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/PositionPage.vue')
        },
        
      },
      {
        path: '/admin/map',
        name: 'map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/MapPage.vue')
        }
      },
      {
        path: '/admin/partemployee',
        name: 'partemployee',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/PartEmployeesPage.vue')
        }
      },
      {
        path: '/admin/addnewemployee',
        name: 'addnewemployee',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/AddingNewEmployee.vue')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../Layout/LoginPage.vue')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/NotFoundPage.vue')
    }
  },
  {
    path: '/servererror',
    name: 'error',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ErrorPage.vue')
    }
  }
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
