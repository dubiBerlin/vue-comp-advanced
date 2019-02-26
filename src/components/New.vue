<template>
  <div>
    <h3 class="new">New Quote</h3>
    <p>
      <button @click="counter++">Click</button>
    </p>
    {{this.counter}}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  props: [""]
};
</script>

<style scoped>
</style>