<template>
  <div class="home-page">
    <img src="/assets/background_image_1.jpg" alt="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  width: 1440px;
  background: #FFFFFF;
}
</style>