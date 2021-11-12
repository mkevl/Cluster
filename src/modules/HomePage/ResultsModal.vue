<template>
  <div class="results-modal">
    <div class="modal-first-layer"/>
    <div class="modal-second-layer"/>
    <div class="modal-third-layer"/>
    <div v-if="isSmallScreen" class="home-icon" @click="hideResultsModal">
      <img src="assets/icons/home_icon.svg" alt="">
    </div>
    <div v-else class="d-flex close-modal" @click="hideResultsModal">
      <img src="/assets/close_button.png" alt="">
      <span class="ml-2">დახურვა</span>
    </div>
    <p class="header-one mb-0">ჯანმრთელობის დაზღვევა</p>
    <p class="header-two mb-0">- გაუმჯობესებული პაკეტი</p>
    <div class="month-calculation-box"/>
    <div class="day-box">
      <object class="time-background" data="/assets/time_background.svg" type="image/svg+xml"/>
      <div class="time-calculation-container">
        <span class="left-text">დარჩა</span>
        <span class="day-number-text mt-3">{{ getDays }}</span>
        <span class="day-text">დღე</span>
      </div>
    </div>
    <div class="day-box-section-two">
      <span class="box-description">
        Cluster is made to optimize your expenses,
        whether you are a physical entity or running a business of any size.
        Paying less in stuff and services
      </span>
      <contact-button class="modal-contact-button"/>
    </div>
    <p class="cluster-in-number">კლასტერი რიცხვებში</p>
    <ul class="clusters">
      <li class="clusters-box">
        <p class="clusters-text">კომპანიების რაოდენობა კლასტერში</p>
        <div class="d-flex align-items-center clusters-quantity">
          <p class="mr-3">{{ statisticData.companies }}</p>
          <p class="clusters-quantity-text">კომპანია</p>
        </div>
      </li>
      <li class="clusters-box">
        <p class="clusters-text">ადამიანების რაოდენობა კლასტერში</p>
        <div class="d-flex align-items-center clusters-quantity">
          <p class="mr-3">{{ statisticData.persons }}</p>
          <p class="clusters-quantity-text">ადამიანი</p>
        </div>
      </li>
    </ul>
    <p class="proposed-text">შემოთავაზებული ფასები</p>
    <div class="providers-list">
      <div class="d-flex">
        <div class="providers-first-list-image-background">
          <img class="provider-list-image" :src="`${computeBaseUrl}${providersFirstListItem.provider.provider_logo_url}`"
               alt="">
        </div>
        <p class="provider-first-title">{{ providersFirstListItem.provider.name }}</p>
        <p class="provider-first-item-price">{{ Math.round(providersFirstListItem.price_per_month) }} &#8382;</p>
        <span class="best-offer-stroke"/>
      </div>
      <p class="best-offer-text">&bull; საუკეთესო შეთავაზება</p>
      <p class="last-update">ბოლოს განახლდა <br/> {{ getFormattedDate }}</p>
      <div class="provider-list-second-section">
        <div class="providers-list-item" v-for="(item) in packageData" :key="item.uuid">
          <div class="d-flex">
            <div class="providers-list-image-background">
              <img class="provider-list-image" :src="`${computeBaseUrl}${item.provider.provider_logo_url}`" alt="">
            </div>
            <p class="provider-title">{{ item.provider.name }}</p>
            <p class="provider-item-price">{{ Math.round(item.price_per_month) }} &#8382;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import ContactButton from "./ContactButton";

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "ResultsModal",
  components: {ContactButton},
  data() {
    return {
      windowWidth: window.innerWidth,
      baseUrl: process.env.VUE_APP_API_HOST
    }
  },
  computed: {
    ...mapState({
      packageData: state => state.results.modal.packageData,
      statisticData: state => state.results.modal.statisticData
    }),
    providersFirstListItem() {
      return this.packageData[0];
    },
    getDays() {
      const date = new Date(), y = date.getFullYear(), m = date.getMonth(), currentDay = date.getDate();
      const monthLastDay = new Date(y, m + 1, 0).getDate();
      return monthLastDay - currentDay;
    },
    isSmallScreen() {
      return this.windowWidth <= 480
    },
    computeBaseUrl() {
      const len = this.baseUrl.length
      if (this.baseUrl[len - 1] === '/') {
        return this.baseUrl.substring(0, this.baseUrl.length - 1);
      }
      return this.baseUrl
    },
    getFormattedDate() {
      const date = new Date(this.providersFirstListItem.price_last_updated_at)
      const year = date.getFullYear().toString().substring(2)
      return `${date.getMonth()}.${date.getDate()}.${year}`
    }
  },
  methods: {
    ...mapActions(['hideResultsModal']),
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

/deep/ ul {
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;

  > li {
    display: block;
    list-style-type: none;
  }
}

.modal-first-layer {
  position: absolute;
  width: 100%;
  height: 1024px;
  background: #1E1647;
  opacity: 0.9;
  top: 0;
  backdrop-filter: blur(4px);
}

.modal-second-layer {
  position: absolute;
  width: 90%;
  height: 926px;
  left: 85px;
  top: 96px;
  background: #1E1647;
  backdrop-filter: blur(4px);
  border-radius: 100px 100px 0 0;
}

.modal-third-layer {
  position: absolute;
  width: 90%;
  height: 927px;
  left: 85px;
  top: 96px;
  background: linear-gradient(107.26deg, #2B198A -0.48%, rgba(35, 26, 83, 0) 35.91%);
  opacity: 0.8;
  border-radius: 100px 100px 0 0;
}

@media all and (max-width: 480px) {
  .modal-first-layer {
    display: none;
  }

  .modal-second-layer {
    left: 0;
    top: 0;
    width: 100%;
    height: 2171px;
    border-radius: unset;
    overflow-y: hidden;
  }

  .modal-third-layer {
    left: 0;
    top: 0;
    width: 100%;
    height: 2171px;
    border-radius: unset;
    overflow-y: hidden;
  }
}

.home-icon {
  position: absolute;
  top: 26px;
  left: 40px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 50px;
}

.close-modal {
  cursor: pointer;
  position: absolute;
  width: 72px;
  height: 18px;
  right: 124px;
  top: 53px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
}

.header-one {
  position: absolute;
  height: 26px;
  left: 164px;
  top: 158px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #D7CAFD;
}

.header-two {
  position: absolute;
  height: 26px;
  left: 475px;
  top: 163px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #D7CAFD;
}

@media all and (max-width: 480px) {
  .header-one {
    left: 39px;
    top: 91px;
  }

  .header-two {
    left: 42px;
    top: 133px;
  }
}

.month-calculation-box {
  position: absolute;
  width: 791px;
  height: 372px;
  left: 138px;
  top: 220px;
  background: #231A53;
  opacity: 0.8;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.04);
  border-radius: 50px;
}

@media all and (max-width: 480px) {
  .month-calculation-box {
    width: 90%;
    height: 683px;
    left: 20px;
    top: 211px;
  }
}

.day-box {
  position: absolute;
  top: 224px;
  left: 157px;
}

.time-calculation-container {
  position: absolute;
  width: 53px;
  height: 134px;
  left: 156px;
  top: 122px;
}

.left-text {
  position: absolute;
  width: 51px;
  height: 18px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #D7C9FE;
}

.day-number-text {
  position: absolute;
  width: 53px;
  height: 19px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 160%;
  text-align: center;
  color: #0AE29F;
}

.day-text {
  position: absolute;
  width: 53px;
  top: 88px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38.4px;
  text-align: center;
  color: #0AE29F;
}

@media all and (max-width: 480px) {
  .day-box {
    left: 25px;
    top: 236px;
  }

  .time-background {
    width: 97%;
    height: 364.89px;
  }

  .time-calculation-container {
    top: 119px;
    left: 138px;
  }
}

.day-box-section-two {
  position: absolute;
  top: 271px;
  left: 577px;
}

.box-description {
  position: absolute;
  width: 311px;
  height: 104px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #D7C9FE;
}

.modal-contact-button {
  position: absolute;
  margin: 225px 0 0 0;
}

@media all and (max-width: 480px) {
  .day-box-section-two {
    top: 610px;
    left: 42px;
  }

  .modal-contact-button {
    margin-top: 165px;
  }
}

.cluster-in-number {
  position: absolute;
  width: 214px;
  height: 26px;
  left: 174.15px;
  top: 650px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #D7CAFD;
}

@media all and (max-width: 480px) {
  .cluster-in-number {
    display: none;
  }
}

.clusters {
  position: absolute;
  left: 138px;
  top: 684px;
}

.clusters-box {
  width: 380px;
  height: 240px;
  background: #231A53;
  opacity: 0.8;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.04);
  border-radius: 50px;
  margin-right: 37.96px;
}

@media all and (max-width: 480px) {
  .clusters {
    left: 20px;
    top: 968px;
    display: block !important;
    width: 100%;
  }

  .clusters-box {
    width: 90%;
    height: 207px;
    margin-right: unset;
    margin-bottom: 57px;
  }
}

.clusters-text {
  position: absolute;
  width: 303px;
  height: 26px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #D7CAFD;
  margin: 42px 0 0 36.15px;
}

.clusters-quantity {
  position: absolute;
  width: 289.83px;
  height: 65px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  color: #EAE2FF;
  margin: 120px 0 0 36.44px;
}

.clusters-quantity-text {
  line-height: 36.8px;
  font-size: 32px;
  font-weight: 400;
}

@media all and (max-width: 480px) {
  .clusters-text {
    margin: 36px 0 0 20px;
    width: 299px;
    height: 26px;
  }

  .clusters-quantity {
    width: 275.34px;
    height: 65px;
    margin: 114px 0 0 20.42px;
  }
}

.proposed-text {
  position: absolute;
  width: 303px;
  height: 25.43px;
  left: 981px;
  top: 195.1px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #D7CAFD;
}

@media all and (max-width: 480px) {
  .proposed-text {
    top: 1559px;
    left: 42px;
  }
}

.providers-list {
  position: absolute;
  top: 235px;
  left: 960px;
  display: block !important;
  height: 685px;
  width: 340px;
  overflow-x: hidden;
  overflow-y: auto;
}

.provider-list-second-section {
  position: absolute;
  top: 136px;
  left: 8px;
}

.providers-first-list-image-background {
  position: absolute;
  width: 65px;
  height: 65px;
  background: #191142;
  border-radius: 50%;
  left: 5px;
  top: 28px;
}

.providers-list-image-background {
  width: 65px;
  height: 65px;
  background: #191142;
  border-radius: 50%;
  margin-top: 50px;
}

@media all and (max-width: 480px) {
  .providers-list {
    height: 500px;
    left: 30px;
    top: 1622px;
  }

  .provider-list-second-section {
    left: 0;
  }

  .providers-first-list-image-background {
    left: 0;
  }
}

.provider-list-image {
  position: absolute;
  width: 37.14px;
  height: 37.14px;
  margin: 13.93px;
  border-radius: 50%;
}

.provider-first-title {
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 25.43px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #EAE2FF;
  padding: 0;
  margin: 50px 0 0 80px;
}

.provider-title {
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 25.43px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #EAE2FF;
  padding: 0;
  margin: 75px 0 0 15px;
}

.provider-first-item-price {
  position: absolute;
  min-width: 59px;
  height: 25px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  color: #0AE29F;
  margin: 45px 0 0 249px;
}

.provider-item-price {
  position: absolute;
  min-width: 59px;
  height: 25px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #EAE2FF;
  margin: 75px 0 0 240px;
}

.best-offer-text {
  position: absolute;
  width: 172px;
  height: 28px;
  font-family: Helvetica, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #D7CAFD;
  margin: 45px 0 0 25px;
}

.last-update {
  position: absolute;
  width: 122px;
  height: 36px;
  font-family: Helvetica, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  text-align: right;
  color: #D7CAFD;
  margin: 43px 0 0 185px;
}

.best-offer-stroke {
  position: absolute;
  width: 342px;
  height: 0;
  border: 1px solid #100640;
  margin: 165px 0 0 0;
}

@media all and (max-width: 480px) {
  .best-offer-stroke {
    width: 325px;
  }
}
</style>