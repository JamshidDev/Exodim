import { createRouter, createWebHistory } from "vue-router";
const checkToken = () => {
  const token_date = localStorage.getItem("token_created_date");
  let date_token = new Date(token_date).getTime();
  let date_now = new Date().getTime();
  let distance = Math.floor((date_now - date_token) / 1000);
  if (distance > 20000) {
    return false;
  } else {
    return true;
  }
};

const beforeLogin = (to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (token && from.name == "login") {
    next("/admin");
  } else if (token && checkToken()) {
    next("/admin");
  } else {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_created_date");
    next("login");
  }
};

const authLogin = (to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (token && checkToken()) {
    next();
  } else {
    next("login");
  }
};

const routes = [
  {
    path: "/admin",
    name: "admin",
    beforeEnter: authLogin,
    component: function () {
      return import(/* webpackChunkName: "about" */ "../Layout/Layout.vue");
    },
    children: [
      {
        path: "/admin",
        name: "homepage",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/HomePage.vue"
          );
        },
      },
      {
        path: "/admin/statistic",
        name: "statistic",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/StatisticPage.vue"
          );
        },
      },
      {
        path: "/admin/view",
        name: "view",
        children: [
          {
            path: "/admin/view/vacanc/:railway_id/:organization_id/:department_id/:global",
            name: "ViewVacation",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Vacanc/VakantSverxPage.vue"
              );
            },
          },
          {
            path: "/admin/view/birthday/:railway_id/:organization_id/:department_id/:global",
            name: "ViewBirthday",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Birthday/BirthdayPage.vue"
              );
            },
          },
          {
            path: "/admin/view/retired/:railway_id/:organization_id/:department_id/:global",
            name: "ViewRetired",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Retired/RetiredPage.vue"
              );
            },
          },
          {
            path: "/admin/view/sverx/:railway_id/:organization_id/:department_id/:global",
            name: "ViewSverx",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Sverx/SverxPage.vue"
              );
            },
          },
          {
            path: "/admin/view/newcadry/:railway_id/:organization_id/:department_id/:global",
            name: "Newcadry",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/NewCadry/NewCadryPage.vue"
              );
            },
          },
          {
            path: "/admin/view/deletecadry/:railway_id/:organization_id/:department_id/:global",
            name: "Deletecadry",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/DeleteCadry/DeleteCadry.vue"
              );
            },
          },
          {
            path: "/admin/view/contractcadry/:railway_id/:organization_id/:department_id/:global",
            name: "Contractcadry",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/ContractCadry/ContractCadey.vue"
              );
            },
          },
          {
            path: "/admin/view/relativecadry/:railway_id/:organization_id/:department_id/:global",
            name: "Relativecadry",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Relativecadry/RelativeCadryPage.vue"
              );
            },
          },
          {
            path: "/admin/view/careercadry/:railway_id/:organization_id/:department_id/:global",
            name: "Careercadry",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/CareerCadry/CareerCadryPage.vue"
              );
            },
          },
          {
            path: "/admin/view/vacation/:railway_id/:organization_id/:department_id/:global",
            name: "Vacation",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Vacation/VacationPage.vue"
              );
            },
          }, {
            path: "/admin/view/med/:railway_id/:organization_id/:department_id/:global",
            name: "Med",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Med/MedPage.vue"
              );
            },
          },
          {
            path: "/admin/view/blacklist/:railway_id/:organization_id/:department_id/:global",
            name: "BlackList",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/BlackCadry/BlackCadryPage.vue"
              );
            },
          },
          {
            path: "/admin/view/stuffs/:railway_id/:organization_id/:department_id/:global",
            name: "Stuffs",
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/ViewPages/Stuff/StuffPage.vue"
              );
            },
          },
        ],
      },
      {
        path: "/admin/partstatistic",
        name: "partstatistic",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/FactoryStatistic.vue"
          );
        },
      },
      {
        path: "/admin/setting",
        name: "setting",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/SettingPage.vue"
          );
        },
      },
      {
        path: "/admin/employees",
        name: "employees",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/EmployeesPage.vue"
          );
        },
      },
      {
        path: "/admin/companies",
        name: "companies",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/CompanyPage.vue"
          );
        },
      },
      {
        path: "/admin/position",
        name: "position",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/PositionPage.vue"
          );
        },
      },
      {
        path: "/admin/analitic",
        name: "analitic",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/AnalitikaPage.vue"
          );
        },
      },
      {
        path: "/admin/position/userList/:position_id/:position_name",
        name: "positionList",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../components/userList/PositionUserList.vue"
          );
        },
      },
      {
        path: "/admin/partfactory",
        name: "partfactory",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/PartFactory.vue"
          );
        },
      },
      {
        path: "/admin/employee/view/:id",
        name: "viewdetails",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/ViewDetailsPage.vue"
          );
        },
      },
      {
        path: "/admin/department/cadry/:id/:name",
        name: "departmentcadry",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../components/userList/DepartmentCadryList.vue"
          );
        },
      },
      {
        path: "/admin/department/stuff/:id/:name",
        name: "departmentstuff",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/DepartmentStuff.vue"
          );
        },
      },
      {
        path: "/admin/department/stuff/cadry/:id/:name/:depId/:depName",
        name: "departmentstuffcadry",
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../components/userList/StuffCadry.vue"
          );
        },
      },
      {
        path: "/admin/meds",
        name: "med",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ "../views/MegPage.vue");
        },
      },
      {
        path: "/admin/skill",
        name: "Skill",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ "../views/SkillPage/SkillPage.vue");
        },
      },
      {
        path: "/admin/types",
        name: "SkillTypes",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ "../views/SkillPage/TypesPage");
        },
      },
      {
        path: "/admin/direction",
        name: "SkillDirection",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ "../views/SkillPage/DirectionPage.vue");
        },
      },
      
      {
        path: "/admin/superadmin",
        name: "superadmin",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/Admin/AdminPage.vue"
          );
        },
      },
      {
        path: "/admin/vacation",
        name: "vacation",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/VacationPage.vue"
          );
        },
      },
      {
        path: "/admin/punishment",
        name: "punishment",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/PunishmentPage.vue"
          );
        },
      },
      {
        path: "/admin/incentive",
        name: "incentive",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/IncentivePage.vue"
          );
        },
      },

      {
        path: "/admin/partemployee",
        name: "partemployee",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/PartEmployeesPage.vue"
          );
        },
      },
      {
        path: "/admin/historyemployee",
        name: "historyemployee",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/HistoryEmployeePage.vue"
          );
        },
      },
      {
        path: "/admin/addnewemployee",
        name: "addnewemployee",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/AddingNewEmployee.vue"
          );
        },
      },
      {
        path: "/admin/profil",
        name: "profil",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/ProfilPage.vue"
          );
        },
      },
      {
        path: "/admin/zipfiles",
        name: "zipfiles",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/DowloadedZIp/ZipPage.vue"
          );
        },
      },
      {
        path: "/admin/editemployee/:id",
        name: "editemployee",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/Cadry/CadryPage.vue"
          );
        },
        children: [
          {
            path: "/admin/editemployee/:id",
            name: "details-one",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Cadry/CadryDetails/PersonalPage.vue"
              );
            },
          },
          {
            path: "/admin/editemployee/:id/two",
            name: "details-two",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../components/editEmployee/EditAcademy.vue"
              );
            },
          },
          {
            path: "/admin/editemployee/:id/three",
            name: "details-three",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../components/editEmployee/WorkActivity.vue"
              );
            },
          },
          {
            path: "/admin/editemployee/:id/four",
            name: "details-four",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../components/editEmployee/RelativeList.vue"
              );
            },
          },
          {
            path: "/admin/editemployee/:id/five",
            name: "details-five",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Cadry/CadryDetails/AdditionalPage.vue"
              );
            },
          },
          {
            path: "/admin/editemployee/:id/six",
            name: "details-six",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../components/editEmployee/Otherpage.vue"
              );
            },
          },
        ],
      },
    ],
  },

  // Home router
  // Check user details
  {
    path: "/",
    name: "home",
    beforeEnter: beforeLogin,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../Layout/LoginPage.vue");
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/NotFoundPage.vue"
      );
    },
  },
  {
    path: "/servererror",
    name: "error",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/ErrorPage.vue");
    },
  },
  {
    path: "/validate",
    name: "validate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/VeeValidate.vue");
    },
  },
  {
    path: "/ziprar",
    name: "ziprar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../components/Eksport/ZipRar.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
