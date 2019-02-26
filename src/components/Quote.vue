<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc, backgroundColor: #673AB7">
        <slot name="subtitle">The subtitle</slot>
      </span>
    </div>
    <hr>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.title {
  font-style: italic;
}
</style>
