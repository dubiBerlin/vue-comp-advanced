<template>
  <ul class="nav nav-pills">
    <!-- exact bestimmt welches der beide Elemente die active class bekommt -->
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>

    <router-link to="/user/10" tag="li" active-class="active">
      <a>User</a>
    </router-link>
    <router-link to="/user/11" tag="li" active-class="active">
      <a>User</a>
    </router-link>
  </ul>
</template>
