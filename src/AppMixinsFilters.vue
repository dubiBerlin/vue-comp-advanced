<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUpperCase|to-lowercase}}</p>
        <p>{{toUpperCase(text)|to-lowercase}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello people!",
      fruits: ["Apple", "Banana", "Mango", "Melone", "Kiwi"],
      filterText: ""
    };
  },
  methods: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>

<style>
</style>
