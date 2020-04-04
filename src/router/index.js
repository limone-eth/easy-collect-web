import Vue from 'vue'
import Router from 'vue-router'
import MapComponent from "../components/Map"
import ShopRegistrationComponent from "../components/ShopRegistration";
import LandingUsersComponent from "../components/LandingUsers";
import LandingShopsComponent from "../components/LandingShops";
import WhoWeAreComponent from "../components/WhoWeAre";
import FaqComponent from "../components/Faq";
import HowToComponent from "../components/HowTo";

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
      path: "/chi-siamo",
      name: "chi-siamo",
      component: WhoWeAreComponent
    },
    {
      path: "/domande-frequenti",
      name: "faq",
      component: FaqComponent
    },
    {
      path: "/howto",
      name: "howto",
      component: HowToComponent
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})
