import Vue from 'vue'
import Router from 'vue-router'
import MapComponent from "../components/Map"
import ShopRegistrationComponent from "../components/ShopRegistration";
import LandingUsersComponent from "../components/LandingUsers";
import LandingShopsComponent from "../components/LandingShops";
import FaqComponent from "../components/Faq";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "map"
      }
    },
    {
      path: "/mappa",
      name: "map",
      component: MapComponent
    },
    {
      path: "/utenti",
      name: "utenti",
      component: LandingUsersComponent
    },
    {
      path: "/esercenti",
      name: "esercenti",
      component: LandingShopsComponent
    },
    {
      path: "/registrati",
      name: "register",
      component: ShopRegistrationComponent
    },
    {
      path: "/domande-frequenti",
      name: "faq",
      component: FaqComponent
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})
