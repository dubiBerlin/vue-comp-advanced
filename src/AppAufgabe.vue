<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
        <hr>
        <p>{{selectedComponent}}</p>

        <!-- component is reserved word in vue. It gets bind to the string which is in the selectedComponent
        data variable, which contains the names of the components defined in the export default components.
        So its loads the apropriate component according to the content in selectedComponent.-->
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Red from "./components/Red.vue";
import Green from "./components/Green.vue";

export default {
  data: function() {
    return {
      selectedComponent: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appRed: Red,
    appGreen: Green
  }
};
</script>

<style>
</style>
