import Vue from "vue";
import App from "./App.vue";
import AppAufgabe from "./AppAufgabe.vue";
import AppDirectives from "./AppDirectives.vue";
import AppMixinsFilters from "./AppMixinsFilters.vue";
import AppForms from "./AppForms.vue";
import AppFormExercice from "./components/Forms/FormsExercise.vue";
import AppRouting from "./AppRouting.vue";
import { routes } from "./routes";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({ routes });

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

new Vue({
  el: "#app",
  router,
  render: h => h(AppRouting)
});
