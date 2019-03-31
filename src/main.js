import Vue from "vue";
import App from "./App.vue";
import AppAufgabe from "./AppAufgabe.vue";
import AppDirectives from "./AppDirectives.vue";
import AppMixinsFilters from "./AppMixinsFilters.vue";
import AppForms from "./AppForms.vue";
import AppFormExercice from "./components/Forms/FormsExercise.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

new Vue({
  el: "#app",
  render: h => h(AppFormExercice)
});
