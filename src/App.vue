<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>

        <!-- component is reserved word in vue. It gets bind to the string which is in the selectedComponent
        data variable, which contains the names of the components defined in the export default components.
        So its loads the apropriate component according to the content in selectedComponent.-->
        <keep-alive>
          <component :is="selectedComponent">
            <p>default content</p>
          </component>
        </keep-alive>
        <!-- <template v-if="selectedComponent == 'appQuote'">
        <appQuote>-->
        <!-- slot="identifier" so the child knows where to put the content-->
        <!-- <h1 slot="title">- Wonderfull Quote -</h1>
            <h2 slot="content">using slots</h2>
            <span slot="content">{{this.quoteTitle}}</span>
            <h4 slot="subtitle">Ein Untertitel</h4>
            <span>Default</span>
          </appQuote>
        </template>
        <hr>
        <template v-if="selectedComponent == 'appAuthor'">
          <appAuthor></appAuthor>
        </template>
        <hr>
        <template v-if="selectedComponent == 'appNew'">
          <appNew></appNew>
        </template>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author
  }
};
</script>

<style>
</style>
