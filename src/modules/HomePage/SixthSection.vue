<template>
  <div class="main-page-sixth-section">
    <span class="feedback-stroke"/>
    <p class="feedback-title">უკუკავშირი</p>
    <img class="carousel-logo" src="assets/tweeter_logo.png" alt="">
    <span class="carousel-stroke"></span>
    <object class="carousel-top-quote" data="/assets/top_quote.svg" type="image/svg+xml"/>
    <object class="carousel-bottom-quote" data="/assets/bottom_quote.svg" type="image/svg+xml"/>
  </div>
</template>

<script>
export default {
  name: "SixthSection"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

.main-page-sixth-section {
  position: relative;
  height: 897px;
  width: 100%;
  padding: 140px 0 0 116px;
}

@media all and (max-width: 480px) {
  .main-page-sixth-section {
    height: 902px;
    padding: 72px 0 0 27px;
  }
}

.feedback-stroke {
  width: 2px;
  height: 17px;
  background: #6335E9;
  border: 1px solid #6335E9;
  box-sizing: border-box;
}

.feedback-title {
  width: 479px;
  height: 77px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 176.4%;
  color: #1E1647;
  margin: -28px 0 0 13px;
}

@media all and (max-width: 480px) {
  .feedback-title {
    width: 373px;
    height: 37px;
    font-size: 20px;
    line-height: 176.4%;
  }
}

.carousel-logo {
  margin: 140px 0 0 308px;
}

.carousel-stroke {
  position: absolute;
  width: 0;
  height: 351px;
  border: 1px solid #DEE2E6;
  margin: 131px 0 0 56px;
}

.carousel-top-quote {
  margin-top: 24px;
  margin-left: 96px;
}

.carousel-bottom-quote {
  position: absolute;
  margin-left: 493px;
  margin-top: 473px;
}

@media all and (max-width: 480px) {
  .carousel-logo {
    margin: 104px 0 0 13px;
  }

  .carousel-stroke {
    display: none;
  }

  .carousel-top-quote {
    position: absolute;
    margin-top: 202px;
    margin-left: -145px;
  }

  .carousel-bottom-quote {
    margin-top: 489px;
    margin-left: 175px;
  }
}
</style>