import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from "../components/Home"
import ShopRegistrationComponent from "../components/ShopRegistration";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "home"
      }
    },
    {
      path: "/home",
      name: "home",
      component: HomeComponent
    },
    {
      path: "/register",
      name: "register",
      component: ShopRegistrationComponent
    }
  ]
})
