<template>
  <div class="home-page">
    <img src="/assets/background_image_1.jpg" alt="" class="main-image">
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
  overflow: hidden;
  background: #FFFFFF;
}

.main-image {
  height: 1024px;
  width: 100%;
}

@media all and (max-width: 480px) {
  .main-image {
    width: 672px;
    height: 896px;
  }
}
</style>