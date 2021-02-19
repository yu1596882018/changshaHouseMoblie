<template>
  <div class="home">
    <h2 class="hello-world">hello world</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  created() {
    /* this.$services.querySystemDetails(1).then(() => {
      console.log('request', arguments)
    }) */
  },
}
</script>

<style lang="scss">
.hello-world {
  font-size: 80px;
  box-sizing: border-box;
  display: flex;
}
</style>
