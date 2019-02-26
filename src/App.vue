<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <appQuote>
          <h1>- Wonderfull Quote -</h1>
          <h2>using slots</h2>
        </appQuote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  components: {
    appQuote: Quote
  }
};
</script>

<style>
</style>
