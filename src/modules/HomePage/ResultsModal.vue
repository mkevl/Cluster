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
    <div class="result-modal-container">
      <div class="headers">
        <p class="header-one mb-0">ჯანმრთელობის დაზღვევა</p>
        <p class="header-two mb-0">- გაუმჯობესებული პაკეტი</p>
      </div>
      <div :class="{'row': !isSmallScreen}">
        <div :class="{'col-auto': !isSmallScreen}">
          <div class="month-calculation-box"/>
          <div class="calculation-box-container">
            <div class="day-box">
              <object class="time-background" data="/assets/time_background.svg" type="image/svg+xml"/>
              <div class="time-calculation-container">
                <span class="left-text">დარჩა</span>
                <span class="day-number-text mt-3">{{ getDays }}</span>
                <span class="day-text">დღე</span>
              </div>
            </div>
            <div class="day-box-section-two">
              <p class="box-description">
                Cluster is made to optimize your expenses,
                whether you are a physical entity or running a business of any size.
                Paying less in stuff and services
              </p>
              <contact-button class="modal-contact-button"/>
            </div>
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
        </div>
        <div class="results-modal-second-section" :class="{'col-auto': !isSmallScreen}">
          <p class="proposed-text">შემოთავაზებული ფასები</p>
          <div class="providers-list">
            <div v-if="providerExist" class="d-flex">
              <div class="providers-first-list-image-background">
                <img class="provider-list-image"
                     :src="`https://drive.google.com/uc?export=view&id=${providersFirstListItem.provider.provider_logo_url}`"
                     alt="">
              </div>
              <p class="provider-first-title">{{ providersFirstListItem.provider.name }}</p>
              <p class="provider-first-item-price">{{ Math.round(providersFirstListItem.price_per_month) }} &#8382;</p>
            </div>
            <div class="active-offer-container">
              <p v-if="providerExist" class="best-offer-text">&bull; საუკეთესო შეთავაზება</p>
              <p v-if="providerExist && !isSmScreen" class="last-update">ბოლოს განახლდა <br/> {{ getFormattedDate }}</p>
              <p v-if="providerExist && isSmScreen" class="last-update">ბოლოს განახლდა {{ getFormattedDate }}</p>
            </div>
            <span class="best-offer-stroke"/>
            <div class="provider-list-second-section">
              <div class="providers-list-item" v-for="(item) in otherProviders" :key="item.uuid">
                <div v-if="item && item.provider" class="d-flex">
                  <div class="providers-list-image-background">
                    <img class="provider-list-image"
                         :src="`https://drive.google.com/uc?export=view&id=${item.provider.provider_logo_url}`" alt="">
                  </div>
                  <p class="provider-title">{{ item.provider.name }}</p>
                  <p class="provider-item-price">{{ Math.round(item.price_per_month) }} &#8382;</p>
                </div>
              </div>
            </div>
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
  props: {
    baseUrl: String,
  },
  components: {ContactButton},
  data() {
    return {
      windowWidth: window.innerWidth,
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
    otherProviders() {
      return this.packageData.slice(1)
    },
    getDays() {
      const date = new Date(), y = date.getFullYear(), m = date.getMonth(), currentDay = date.getDate();
      const monthLastDay = new Date(y, m + 1, 0).getDate();
      return monthLastDay - currentDay;
    },
    isSmallScreen() {
      return this.windowWidth <= 780
    },
    isSmScreen() {
      return this.windowWidth <= 380
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
    },
    providerExist() {
      return this.providersFirstListItem && this.providersFirstListItem.provider
    },
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

.result-modal-container {
  position: absolute;
  left: 164px;
  top: 158px;
  height: calc(100% - 158px);
  width: calc(100% - 270px);
}

.headers {
  display: flex;
  height: 26px;
  color: #D7CAFD;
  font-family: Helvetica, sans-serif;
  font-style: normal;
}

.header-one {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
}

.header-two {
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-left: 10px;
}

.month-calculation-box {
  width: 791px;
  height: 372px;
  background: #231A53;
  opacity: 0.8;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.04);
  border-radius: 50px;
  margin: 36px 0 0 -36px;
}

.calculation-box-container {
  position: absolute;
  top: 0;
  left: -10px;
  display: flex;
}

//.time-background {
//  position: absolute;
//  border: 16px solid #0AE29F;
//  border-radius: 50%;
//  border-top: 16px solid #3498db;
//  width: 150px;
//  height: 150px;
//}

.day-box {
  margin-top: 37px;
  margin-left: -25px;
}

.time-calculation-container {
  position: absolute;
  width: 53px;
  height: 134px;
  left: 126px;
  top: 156px;
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

.day-box-section-two {
  margin-top: 78px;
  margin-left: 55px;
}

.box-description {
  max-width: 311px;
  height: 104px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #D7C9FE;
  padding: 0;
}

.modal-contact-button {
  position: absolute;
  margin: 121px 0 0 0;
}

.cluster-in-number {
  width: 214px;
  height: 26px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #D7CAFD;
  margin-top: 58px;
}

.clusters {
  margin-left: -36px;
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

.proposed-text {
  width: 303px;
  height: 25.43px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #D7CAFD;
  margin-top: 5px;
}

.results-modal-second-section {
  height: 730px;
  overflow: hidden;
}

.providers-list {
  display: block !important;
  width: 340px;
}

.providers-first-list-image-background {
  margin-top: 37px;
  width: 65px;
  height: 65px;
  background: #191142;
  border-radius: 50%;
}

.providers-list-image-background {
  width: 65px;
  height: 65px;
  background: #191142;
  border-radius: 50%;
  margin-top: 50px;
}

.provider-list-image {
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
  margin: 60px 0 0 15px;
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
  margin: 53px 0 0 249px;
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

.active-offer-container {
  margin: 39px 0 0 25px;
  display: flex;
}

.best-offer-text {
  width: 172px;
  height: 28px;
  font-family: Helvetica, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #D7CAFD;
  margin: 0;
}

.last-update {
  width: 122px;
  height: 36px;
  font-family: Helvetica, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  text-align: right;
  color: #D7CAFD;
  margin: 0;
}

.best-offer-stroke {
  position: absolute;
  width: 342px;
  height: 0;
  border: 1px solid #100640;
  margin: 22px 0 0 0;
}

@media all and (max-width: 1450px) {
  .month-calculation-box {
    width: 691px;
  }

  .time-background {
    width: 90%;
    height: 355px;
  }

  .time-calculation-container {
    left: 108px;
  }

  .day-box-section-two {
    margin-left: 0;
  }

  .clusters-box {
    width: 325px;
  }
}

@media all and (max-width: 1350px) {
  .month-calculation-box {
    width: 608px;
    height: 316px;
  }

  .time-background {
    width: 87%;
    height: 300px;
  }

  .time-calculation-container {
    left: 75px;
    top: 132px;
  }

  .modal-contact-button {
    margin-top: 58px;
  }

  .clusters-box {
    width: 289px;
  }

  .clusters-text {
    width: unset;
    font-size: 13px;
  }
}

@media all and (max-width: 1270px) {
  .modal-first-layer {
    display: none;
  }

  .modal-second-layer {
    left: 0;
    top: 0;
    width: 100%;
    height: 1050px;
    border-radius: unset;
    overflow-y: hidden;
  }

  .modal-third-layer {
    left: 0;
    top: 0;
    width: 100%;
    height: 1050px;
    border-radius: unset;
    overflow-y: hidden;
  }

  .result-modal-container {
    left: 39px;
    top: 91px;
    width: calc(100% - 56px);
  }


  .month-calculation-box {
    margin-left: -15px;
  }

  .clusters {
    margin-left: -15px;
  }
}

@media all and (max-width: 1070px) {
  .modal-second-layer {
    height: 1500px;
  }

  .modal-third-layer {
    height: 1500px;
  }

  .header-two {
    position: absolute;
    top: 37px;
  }

  .month-calculation-box {
    height: 683px;
    width: 340px;
    margin-top: 50px;
  }

  .results-modal-second-section {
    margin-left: 100px;
    height: 1300px;
  }

  .day-box {
    margin-left: 15px;
  }

  .time-background {
    width: 92%;
  }

  .time-calculation-container {
    left: 128px;
  }

  .day-box-section-two {
    position: absolute;
    top: 290px;
    left: 42px;
  }

  .clusters {
    display: block !important;
    margin-left: -15px;
  }

  .clusters-box {
    width: 100%;
    height: 207px;
    margin-right: unset;
    margin-bottom: 57px;
  }
}

@media all and (max-width: 870px) {
  .results-modal-second-section {
    margin-left: unset;
  }
}

@media all and (max-width: 780px) {
  .modal-second-layer {
    height: 2171px;
  }

  .modal-third-layer {
    height: 2171px;
  }

  .month-calculation-box {
    width: 100%;
  }

  .day-box {
    margin-top: 57px;
  }

  .time-calculation-container {
    top: 143px;
  }

  //
  //.time-calculation-container {
  //  top: 119px;
  //  left: 138px;
  //}
  //
  //.day-box-section-two {
  //  top: 610px;
  //  left: 42px;
  //}
  //
  //.modal-contact-button {
  //  margin-top: 165px;
  //}
  //
  //.cluster-in-number {
  //  display: none;
  //}
  //
  //.clusters {
  //  left: 20px;
  //  top: 968px;
  //  display: block !important;
  //  width: calc(100% - 20px);
  //}
  //
  //.clusters-box {
  //  width: 90%;
  //  height: 207px;
  //  margin-right: unset;
  //  margin-bottom: 57px;
  //}
  //
  //.clusters-text {
  //  margin: 36px 0 0 20px;
  //  width: 299px;
  //  height: 26px;
  //}
  //
  //.clusters-quantity {
  //  width: 275.34px;
  //  height: 65px;
  //  margin: 114px 0 0 20.42px;
  //}
  //
  //.proposed-text {
  //  top: 1559px;
  //  left: 42px;
  //}
  //
  //.providers-list {
  //  height: 500px;
  //  left: 30px;
  //  top: 1622px;
  //}
  //
  //.provider-list-second-section {
  //  left: 0;
  //}
  //
  //.providers-first-list-image-background {
  //  left: 0;
  //}
  //
  //.best-offer-stroke {
  //  width: 325px;
  //}
}

/*@media all and (max-width: 320px) {
  .header-one {
    font-size: 16px;
  }

  .header-two {
    font-size: 14px;
  }

  .month-calculation-box {
    width: 90%;
    height: 683px;
    left: 20px;
    top: 211px;
  }

  .time-calculation-container {
    top: 119px;
    left: 98px;
  }

  .box-description {
    width: 220px;
    height: 124px;
    font-size: 14px;
  }

  .day-box-section-two {
    top: 610px;
    left: 42px;
  }

  .modal-contact-button {
    margin-top: 165px;
  }

  .cluster-in-number {
    display: none;
  }

  .clusters-box {
    width: 90%;
    height: 207px;
    margin-right: unset;
    margin-bottom: 57px;
  }

  .clusters-text {
    width: unset;
    font-size: 11.5px;
  }

  .clusters-quantity {
    width: unset;
  }

  .proposed-text {
    width: unset;
  }

  .providers-list {
    height: 500px;
    left: 15px;
    top: 1622px;
    width: calc(100% - 20px);
  }

  .provider-first-title {
    font-size: 14px;
    margin-left: 60px;
    max-width: 150px;
    min-height: 26px;
    height: unset;
  }

  .provider-title {
    font-size: 14px;
    margin-left: 10px;
    max-width: 150px;
    min-height: 26px;
    height: unset;
  }

  .providers-first-list-image-background {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }

  .providers-list-image-background {
    width: 50px;
    height: 50px;
    margin-top: 60px;
  }

  .provider-list-image {
    width: 30px;
    height: 30px;
    margin: 10px;
  }

  .provider-list-second-section {
    left: 0;
  }

  .last-update {
    margin-top: 70px;
    left: -170px;
    width: 173px;
  }

  .providers-first-list-image-background {
    left: 0;
  }

  .best-offer-stroke {
    margin-top: 175px;
    width: 70%;
  }

  .provider-first-item-price {
    margin: 45px 0 0 190px;
  }

  .provider-item-price {
    margin: 75px 0 0 190px;
  }
}*/
</style>