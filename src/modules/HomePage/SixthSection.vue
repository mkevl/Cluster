<template>
  <div v-if="data.length" class="main-page-sixth-section">
    <span class="feedback-stroke"/>
    <p class="feedback-title">შეფასება</p>
    <div class="feedback-container">
      <div v-if="activeItem">
        <img class="carousel-logo" :src="`${computeBaseUrl}${activeItem.image_url}`" alt="">
        <span class="carousel-stroke"/>
        <object class="carousel-top-quote" data="/assets/top_quote.svg" type="image/svg+xml"/>
        <p class="feedback-text">{{ activeItem.feedback_text }}</p>
        <p class="feedback-author">- {{ activeItem.user_full_name }}</p>
      </div>
      <object class="carousel-bottom-quote" data="/assets/bottom_quote.svg" type="image/svg+xml"/>
      <img v-if="showNextItem" class="carousel-next-item-logo" :src="`${computeBaseUrl}${nextItem.image_url}`" alt="">
      <div v-if="data.length > 1" class="carousel-next-slider" @click="onCarouselNextClick">
        <img class="carousel-next-button" src="/assets/next_button.svg" alt=""/>
      </div>
    </div>
    <div v-if="!isSmallScreen" class="d-flex align-items-center justify-content-center carousel-dot">
      <div class="carousel-dot-item" v-for="item in data" :key="item.uuid">
        <img v-if="item.isActive" src="/assets/active_bull.svg" alt="">
        <img v-else src="/assets/little_bull.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import _ from "lodash";

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "SixthSection",
  props: {
    baseUrl: String,
  },
  data() {
    return {
      data: [],
      listWidth: 0,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    ...mapState({
      feedbackData: state => state.feedbackData,
    }),
    showNextItem() {
      return !this.isSmallScreen && this.data.length > 1
    },
    activeItem() {
      return this.data.find((item, index) => {
        if (item.isActive) {
          if (this.data[index + 1]) {
            this.data[index + 1].isNextItem = true
          } else {
            this.data[0].isNextItem = true
          }
          return true
        }
        return false
      })
    },
    nextItem() {
      return this.data.find(item => item.isNextItem)
    },
    isSmallScreen() {
      return this.windowWidth <= 960;
    },
    computeBaseUrl() {
      return 'https://drive.google.com/uc?export=view&id='
      /*const len = this.baseUrl.length
      if (this.baseUrl[len - 1] === '/') {
        return this.baseUrl.substring(0, this.baseUrl.length - 1);
      }
      return this.baseUrl*/
    },
  },
  methods: {
    ...mapActions(['getFeedbackData']),
    onCarouselNextClick() {
      this.data.map(item => item.isActive = false)
      let index = this.data.findIndex(item => item.isNextItem)
      this.data[index].isActive = true
      this.data[index].isNextItem = false
      if (this.data[index + 1]) {
        this.data[index + 1].isNextItem = true
      } else {
        this.data[0].isNextItem = true
      }
      this.data = [...this.data]
    }
  },
  async mounted() {
    await this.getFeedbackData()
    this.data = _.cloneDeep(this.feedbackData.map((item, index) => {
      if (index === 0) {
        item.isActive = true
      }
      return item
    }))
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
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

.feedback-container {
  width: 100%;
  height: 77%;
  margin: 24px 20px 0 120px;
}

.carousel-list-item-container {
  height: 100%;
}

.carousel-logo {
  margin: 116px 0 0 0;
  width: 86px;
  height: 86px;
  border-radius: 50%;
}

.carousel-next-item-logo {
  position: absolute;
  width: 86px;
  height: 86px;
  top: 342px;
  right: 25px;
  border-radius: 50%;
  opacity: 0.5;
}

.carousel-stroke {
  position: absolute;
  width: 0;
  height: 50%;
  border: 1px solid #DEE2E6;
  margin: 109px 0 0 56px;
}

.carousel-top-quote {
  margin-left: 96px;
}

.carousel-bottom-quote {
  position: absolute;
  right: 275px;
  margin-top: -30px;
  width: 87px;
  height: 69px;
}

.feedback-text {
  width: calc(100% - 680px);
  min-height: 134px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 170%;
  color: #212529;
  margin: -60px 0 0 237px
}

.feedback-author {
  width: 279px;
  height: 59px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 166%;
  color: #212529;
  margin: 20px 0 0 237px
}

.carousel-next-slider {
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 39.5px;
  top: 470px;
  right: 40px;
}

.carousel-next-button {
  width: 50px;
  height: 39.5px;
}

.carousel-dot-item {
  margin-right: 16px;
}

.carousel-dot {
  position: absolute;
  bottom: 75px;
  left: 50%;
}

@media all and (max-width: 1770px) {
  .feedback-text {
    width: calc(100% - 560px);
  }

  .carousel-bottom-quote {
    right: 210px;
  }
}

@media all and (max-width: 1590px) {
  .main-page-sixth-section {
    height: 1024px;
  }
}

@media all and (max-width: 1400px) {
  .main-page-sixth-section {
    height: 1148px;
  }

  .carousel-stroke {
    height: 650px;
  }
}

@media all and (max-width: 1250px) {
  .feedback-container {
    margin-left: 0;
  }

  .feedback-text {
    width: calc(100% - 400px);
  }

  .carousel-stroke {
    height: 50%;
  }

  .carousel-bottom-quote {
    right: 155px;
  }

}


@media all and (max-width: 1100px) {
  .main-page-sixth-section {
    padding: 70px 0 0 58px;
  }

  .carousel-next-item-logo {
    top: 277px;
  }

  .carousel-next-slider {
    top: 412px;
  }
}

@media all and (max-width: 960px) {
  .main-page-sixth-section {
    height: 902px;
    padding: 72px 0 0 27px;
  }

  .feedback-title {
    width: 373px;
    height: 37px;
    font-size: 20px;
    line-height: 176.4%;
  }

  .feedback-container {
    margin: 104px 0 0 13px;
  }

  .carousel-logo {
    margin: 0;
  }

  .carousel-stroke {
    display: none;
  }

  .feedback-text {
    width: calc(100% - 135px);
    font-size: 20px;
    line-height: 200%;
    margin: 90px 0 0 0;
  }

  .feedback-author {
    margin-left: 4px;
  }

  .carousel-top-quote {
    position: absolute;
    margin-top: 100px;
    margin-left: -123px;
  }

  .carousel-bottom-quote {
    right: 95px;
  }

  .carousel-next-slider {
    right: 30px;
  }
}

@media all and (max-width: 720px) {
  .main-page-sixth-section {
    height: 1024px;
  }

  .feedback-text {
    width: calc(100% - 125px);
  }
}

@media all and (max-width: 600px) {
  .main-page-sixth-section {
    height: 1100px;
  }
}

@media all and (max-width: 490px) {
  .feedback-container {
    margin-top: 80px;
  }

  .feedback-text {
    font-size: 18px;
    width: calc(100% - 75px);
  }

  .feedback-author {
    font-size: 14px;
  }

  .carousel-bottom-quote {
    right: 35px;
  }

  .carousel-next-slider {
    width: 40px;
    height: 30.5px;
    right: 15px;
  }

  .carousel-next-button {
    width: 40px;
    height: 30.5px;
  }
}

@media all and (max-width: 360px) {
  .main-page-sixth-section {
    height: 964px;
  }

  .feedback-container {
    margin-top: 80px;
  }

  .feedback-text {
    font-size: 14px;
    width: calc(100% - 45px);
    margin-top: 60px;
    margin-left: -15px;
  }

  .feedback-author {
    font-size: 13px;
  }

  .carousel-top-quote {
    width: 50px;
  }

  .carousel-bottom-quote {
    width: 50px;
  }
}
</style>