import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),

    children:[
      {
        path:"all-projects",
        name:"AllProjects",
        component: () => import('../views/ProjectsChildren/AllProjects.vue'),
      },
      {
        path:"phone-cases-shop",
        name:"PhoneCasesShopProject",
        component: () => import('../views/ProjectsChildren/PhoneCasesShop.vue')
      },
      {
        path:"weather-app",
        name:"WeatherAppProject",
        component: () => import('../views/ProjectsChildren/WeatherApp.vue')
      },
      {
        path:"laptomania",
        name:"LaptopmaniaProject",
        component: () => import('../views/ProjectsChildren/Laptomania.vue')
      },
      {
        path:"blog-system",
        name:"BlogSystemProject",
        component: () => import('../views/ProjectsChildren/BlogSystem.vue')
      },
      {
        path:"movie-fight",
        name:"MovieFightProject",
        component: () => import('../views/ProjectsChildren/MovieFight.vue')
      },
      {
        path:"java-projects",
        name:"JavaProjects",
        component: () => import('../views/ProjectsChildren/JavaProjects.vue')
      },
    ]
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
