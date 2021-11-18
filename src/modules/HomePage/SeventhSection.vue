<template>
  <div class="main-page-seventh-section">
    <p class="faq-title">ხშირად დასმული კითხვები</p>
    <div class="row faq-container">
      <div class="col-lg-8 col-md-12">
        <ul class="faq-list">
          <li class="" v-for="(item, index) in faqData" :key="index">
            <div class="faq-list-item d-flex justify-content-between" @click="toggleFAQ(item)">
              <p class="faq-list-question">{{ item.question }}</p>
              <img v-if="item.isActive" class="toggle-icon" src="/assets/icons/minus_icon.svg" alt="">
              <img v-else class="toggle-icon" src="/assets/icons/plus_icon.svg" alt="">
            </div>
            <p class="active-question-description" :style="item.style">{{ item.answer }}</p>
          </li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="contact-container">
          <p class="contact-title">დაგვიკავშირდი</p>
          <div class="d-flex contact-info-container">
            <img src="assets/icons/email_icon.svg" alt="">
            <a class="contact-info" :href="`mailto:${email}`" target="_blank">{{ email }}</a>
          </div>
          <div class="d-flex contact-info-container mt-5">
            <img src="assets/icons/phone_icon.svg" alt="">
            <a class="contact-info" :href="`tel:${phoneNumber}`" target="_blank">{{ phoneNumber }}</a>
          </div>
          <a class="icons" :href="`https://wa.me/${phoneNumber}`" target='_blank'>
            <img src="/assets/icons/whatsapp_icon.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <p class="copyright-title">&copy; Copyright 2020 . All rights reserved.</p>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import _ from "lodash";

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "SeventhSection",
  props: {
    phoneNumber: String,
    email: String,
  },
  data() {
    return {
      faqData: []
    }
  },
  computed: {
    ...mapState({
      data: state => state.faqData,
    }),
  },
  methods: {
    ...mapActions(['getFaqData']),
    toggleFAQ(item) {
      this.faqData.map(d => {
        if (d.uuid === item.uuid) {
          d.isActive = !d.isActive
          d.style = d.isActive ? {display: 'block'} : {display: 'none'};
        } else {
          d.isActive = false
          d.style = {display: 'none'}
        }
        return d
      })
    },
  },
  async mounted() {
    await this.getFaqData()
    this.faqData = _.cloneDeep(this.data.map(d => ({...d, isActive: false, style: {display: 'none'}})))
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica');
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

.main-page-seventh-section {
  position: relative;
  width: 100%;
  min-height: 925px;
  background: linear-gradient(162.38deg, #8B63FF -57.19%, #6335E9 87.95%);
}

.faq-title {
  position: absolute;
  width: 699px;
  height: 54px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #FFFFFF;
  margin: 120px 0 0 114px;
}

.faq-container {
  width: calc(100% - 100px);
}

.faq-list {
  margin-top: 246px;
  margin-left: 117px;
  padding: 0;
  margin-bottom: 200px;

  > li {
    list-style-type: none;
    margin-right: 30px;
  }
}

.faq-list-item {
  position: relative;
  width: 583px;
  height: auto;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 24px;
}

.faq-list-question {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 180%;
  color: #FFFFFF;
  min-height: 40px;
  margin: 22px 0 10px 24px;
}

.toggle-icon {
  margin: 21px 20px 0 0;
  width: 24px;
  height: 24px;
}

.active-question-description {
  height: auto;
  width: auto;
  max-width: 545px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 170%;
  color: #FFFFFF;
  margin: 32px 40px 40px 29px;
}

.contact-container {
  margin: 128px 0 0 100px;
}

.contact-title {
  width: 699px;
  height: 54px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #FFFFFF;
  padding: 0;
}

.contact-info-container {
  margin-top: 81px;
}

.contact-info {
  width: 175px;
  height: 22px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin-top: 8px;
}

.icons {
  position: absolute;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50px;
  margin-left: 10px;
  margin-top: 135px;
}

.copyright-title {
  position: absolute;
  height: 15px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  bottom: 79px;
  left: 45%;
}

@media all and (max-width: 992px) {
  .main-page-seventh-section {
    min-height: 1270px;
  }

  .faq-title {
    position: relative;
    width: 372px;
    height: 52px;
    font-size: 24px;
    line-height: 170%;
    margin: 0 0 0 35px;
    padding-top: 100px;
  }

  .faq-list {
    position: relative;
    margin-top: 63px;
    margin-left: 5%;
    margin-bottom: 112px;

    > li {
      margin-right: unset;
    }
  }

  .faq-list-item {
    min-width: 334px;
  }

  .faq-list-question {
    font-size: 16px;
  }

  .active-question-description {
    font-size: 16px;
  }

  .contact-container {
    margin: 0 0 250px 35px;
  }

  .contact-title {
    width: 336px;
    height: 77px;
    font-size: 24px;
    line-height: 160%;
  }

  .contact-info-container {
    margin-top: 8px;
  }

  .icons {
    margin: 50px 0 100px 10px;
  }

  .copyright-title {
    bottom: 56px;
    left: 35%;
  }
}

@media all and (max-width: 480px) {
  .faq-list-item {
    width: 85%;
  }

  .copyright-title {
    left: 20%;
  }
}

@media all and (max-width: 320px) {
  .faq-title {
    font-size: 18px;
    margin: 0 0 0 25px;
  }

  .faq-list-item {
    min-width: 100px;
    width: 255px;
  }

  .faq-list-question {
    font-size: 14px;
  }

  .active-question-description {
    font-size: 14px;
  }

  .contact-container {
    margin-left: 25px;
  }

  .contact-title {
    font-size: 16px;
  }

  .contact-info-container {
    margin-top: 6px;
  }

  .copyright-title {
    left: 10%;
  }
}
</style>