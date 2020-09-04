<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',

  mounted() {

    this.loadPoints();
  },
}
</script>

<style>
* {
  margin: 0;
}
</style>
