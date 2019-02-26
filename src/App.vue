<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <appQuote>
          <!-- slot="identifier" so the child knows where to put the content-->
          <h1 slot="title">- Wonderfull Quote -</h1>
          <h2 slot="content">using slots</h2>
          <span slot="content">{{this.quoteTitle}}</span>
          <h4 slot="subtitle">Ein Untertitel</h4>
          <span>Default</span>
        </appQuote>
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
      quoteTitle: "The Quote"
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
