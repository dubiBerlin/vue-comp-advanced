<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">go To Home</button>
    <p>UserID {{id}}</p>
    <hr>
    <select class="form-control" v-model="selectedValue" v-on:change="selectIt">
      <option value disabled selected>Select your option</option>
      <option value="hi">Hi</option>
      <option value="hallo">Hallo</option>
      <option value="gutenacht">Gute Nacht</option>
    </select>
    <hr>

    <select class="form-control" v-model="selectedValue2" v-on:change="selectIt2">
      <option value disabled selected>Select your option</option>
      <option value="/wer">Wer</option>
      <option value="/wie">Wie</option>
      <option value="/was">Was</option>
    </select>
  </div>
</template>
<script >
export default {
  data: function() {
    return {
      id: this.$route.params.id,
      selectedValue: "",
      selectedValue2: ""
    };
  },
  methods: {
    selectIt(event) {
      let self = this._self;
      console.log("selectIt:\n", this.$router);
      this.$router.push(`/${this.selectedValue}`);
    },
    selectIt2() {
      let fullPath = this.$router.history.current.fullPath;
      console.log("router:\n ", this.$router);
      fullPath = `${fullPath}${this.selectedValue2}`;
      this.$router.push(fullPath);
    },
    navigateToHome() {
      this.$router.push("/");
    }
  },
  watch: {
    //  wird jedesmal gefeuert wenn die route sich ändert
    // nimmt den Parameter id der in der route.js definiert wurde und fügt ihn in die variable id ein.
    $route(to, from) {
      this.id = to.params.id;
    }
  }
};
</script>
