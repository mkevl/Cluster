<template>
  <div class="main-page-sixth-section">
    <span class="feedback-stroke"/>
    <p class="feedback-title">უკუკავშირი</p>
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
</style>