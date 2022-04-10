// Imports
import Router from "vue-router";
// import scrollBehavior from './scroll-behavior'
import Vue from "vue";
// Globals
import home from "./modules/home";
import carInsurance from "./modules/carInsurance";
import carInformation from "./modules/car-information";
import policyInquire from "./modules/userInformation";
import insuranceFee from "./modules/insuranceFee";
import paymentSuccess from "./modules/paymentSuccess";

import BaseLayout from "@/layout/index";
// Setup
Vue.use(Router);

export const constantRoutes = [
  {
    path: "",
    name: "CarInsurance",
    redirect: "/car-insurance",
    hidden: true,
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically base on user roles
 */
export const asyncRoutes = [
  {
    path: "",
    component: BaseLayout,
    meta: {
      icon: "",
      requiresAuth: false,
    },
    children: [
      home,
      carInsurance,
      policyInquire,
      carInformation,
      insuranceFee,
      paymentSuccess,
    ],
  },
  { path: "*", redirect: "/404", hidden: true },
];

export function createRouter() {
  let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    // scrollBehavior: (...args) => scrollBehavior(vuetify, store, ...args),
    routes: [...constantRoutes, ...asyncRoutes],
  });
  router.beforeEach((to, from, next) => {
    document.title = `Insurance | ${to.meta.title}`;
    next();
  });
  return router;
}
