<template>
  <div class="main-page-sixth-section">
    <span class="feedback-stroke"/>
    <p class="feedback-title">უკუკავშირი</p>
    <div v-if="activeItem" class="carousel-list">
      <img class="carousel-logo" :src="activeItem.image_url" alt="">
      <span class="carousel-stroke"/>
      <object class="carousel-top-quote" data="/assets/top_quote.svg" type="image/svg+xml"/>
      <object class="carousel-bottom-quote" data="/assets/bottom_quote.svg" type="image/svg+xml"/>
      <p class="feedback-text">{{ activeItem.feedback_text }}</p>
      <p class="feedback-author">- {{ activeItem.user_full_name }}</p>
    </div>
    <img v-if="showNextItem" class="carousel-next-item-logo" :src="nextItem.image_url" alt="">
    <div v-if="data.length > 1" class="carousel-next-slider" @click="onCarouselNextClick">
      <img class="carousel-next-button" src="/assets/next_button.svg" alt=""/>
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
      return this.windowWidth <= 480;
    },
    computeBaseUrl() {
      const len = this.baseUrl.length
      if (this.baseUrl[len - 1] === '/') {
        return this.baseUrl.substring(0, this.baseUrl.length - 1);
      }
      return this.baseUrl
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

.carousel-list {
  margin: 24px 20px 0 192px;
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
  top: 348px;
  right: 25px;
  border-radius: 50%;
}

.carousel-stroke {
  position: absolute;
  width: 0;
  height: 351px;
  border: 1px solid #DEE2E6;
  margin: 109px 0 0 56px;
}

.carousel-top-quote {
  margin-left: 96px;
}

.carousel-bottom-quote {
  position: absolute;
  margin-left: 493px;
  margin-top: 380px;
}

.feedback-text {
  position: absolute;
  max-width: 592px;
  height: 134px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 170%;
  color: #212529;
  margin: 0 0 0 237px
}

.feedback-author {
  position: absolute;
  width: 279px;
  height: 59px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 166%;
  color: #212529;
  margin: 149px 0 0 237px
}

.carousel-next-slider {
  position: absolute;
  width: 308px;
  height: 495px;
  margin-top: 150px;
  top: 0;
  right: -93px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);
  cursor: pointer;
}

.carousel-next-button {
  position: absolute;
  width: 50px;
  height: 39.5px;
  left: 124px;
  top: 315px;
}

@media all and (max-width: 480px) {
  .carousel-list {
    margin: 104px 0 0 13px;
  }
  .carousel-logo {
    margin: 0;
  }

  .carousel-stroke {
    display: none;
  }

  .feedback-text {
    max-width: 334px;
    max-height: 134px;
    font-size: 20px;
    line-height: 200%;
    margin: 68px 0 0 0;
  }

  .feedback-author {
    margin: 281px 0 0 4px;
  }

  .carousel-top-quote {
    position: absolute;
    margin-top: 100px;
    margin-left: -145px;
  }

  .carousel-bottom-quote {
    margin-top: 400px;
    margin-left: 175px;
  }

  .carousel-next-slider {
    margin-top: 150px;
    width: 0;
    height: 0;
    background: transparent;
  }

  .carousel-next-button {
    width: 15px;
    height: 25px;
    right: 110px;
    left: unset;
    top: 315px;
  }
}

.carousel-dot-item {
  margin-right: 16px;
}

.carousel-dot {
  margin-top: 356px;
}
</style>