<template>
  <div class="main-page-first-section">
    <object class="klaster-logo" data="assets/klaster_logo.svg" type="image/svg+xml"/>
    <h1 class="main-title">შეამცირე შენი ბიზნესის ხარჯი</h1>
    <p class="main-description">პლატფორმა საერთო ინტერესების გარშემო გაერთიანებისთვის</p>
    <p class="insurance-title">აირჩიე დაზღვევა</p>
    <div class="d-flex justify-content-center insurance-buttons">
      <div class="d-flex align-items-center" :class="{'active-insurance-button': isActive.life}">
        <b-button class="insurance-option-button" :class="{'active-button-background': isActive.life}" size="sm"
                  @click="onSelectButtonClick('life')">
          <span :class="getActiveLifeClass">სიცოცხლის</span>
        </b-button>
      </div>
      <div class="d-flex align-items-center last-insurance-btn" :class="{'active-insurance-button': isActive.health}">
        <b-button class="insurance-option-button" :class="{'active-button-background': isActive.health}" size="sm"
                  @click="onSelectButtonClick('health')">
          <span :class="getActiveHealthClass">ჯანმრთელობის</span>
        </b-button>
      </div>
    </div>
    <div class="insurance-package">
      <p class="package-text">აირჩიე პაკეტი</p>
      <b-form-radio-group v-model="checked" class="package-radio-buttons">
        <b-form-radio v-for="item in options" class="ml-4" :class="item.class" :key="item.value" :value="item.value">
          <p class="mb-0 ml-3 radio-button-label" :class="{'active-radio-button': checked === item.value}">
            {{ item.text }}
          </p>
        </b-form-radio>
      </b-form-radio-group>
    </div>
    <b-button class="results-button" @click="onResultsCLick">
      <span class="results-text">შედეგების ნახვა</span>
    </b-button>
    <div class="d-flex align-items-center justify-content-center contact">
      <span class="contact-text">დაგვიკავშირდი</span>
      <span class="connect-stroke"/>
      <a class="icons" :href="`mailto:${email}`">
        <img src="/assets/icons/email_icon.svg" alt="">
      </a>
      <a class="icons" :href="`tel:${phoneNumber}`">
        <img src="/assets/icons/phone_icon.svg" alt="">
      </a>
      <a class="icons" :href="`https://wa.me/${phoneNumber}`" target='_blank'>
        <img src="/assets/icons/whatsapp_icon.svg" alt="">
      </a>
      <!--<a class="icons" :href="`https://www.m.me/${messengerUrl}`" target='_blank'>
        <img class="messenger-icon" src="/assets/icons/messenger_icon.svg" alt="">
      </a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection",
  props: {
    email: String,
    phoneNumber: String,
    // messengerUrl: String,
  },
  data() {
    return {
      options: [
        {value: 'min', text: 'მინიმალური'},
        {value: 'basic', text: 'საბაზისო'},
        {value: 'improved', text: 'გაუმჯობესებული', class: 'last-radio-button'},
      ],
      checked: 'min',
      isActive: {
        life: true,
        health: false,
      },
    }
  },
  computed: {
    getActiveLifeClass() {
      return this.isActive.life ? 'insurance-active-text' : 'insurance-button-text'
    },
    getActiveHealthClass() {
      return this.isActive.health ? 'insurance-active-text' : 'insurance-button-text'
    },
  },
  methods: {
    onSelectButtonClick(type) {
      if (type === 'life') {
        this.isActive.life = true
        this.isActive.health = false
      } else {
        this.isActive.life = false
        this.isActive.health = true
      }
    },
    onResultsCLick() {
      this.$emit('on-see-results-click', this.isActive, this.checked)
    },
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

.main-page-first-section {
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
}

.klaster-logo {
  margin-top: 57px;
}

@media all and (max-width: 480px) {
  .klaster-logo {
    width: 107.25px;
    height: 53px;
  }
}

.main-title {
  margin: 6rem 0 0 0;
  height: 100px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 83px;
  text-align: center;
  color: #FFFFFF;
}

@media all and (max-width: 580px) {
  .main-title {
    margin-top: 4rem;
    height: 132px;
    font-size: 40px;
    line-height: 160%;
  }
}

.main-description {
  height: 32px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  color: #FFFFFF;
  margin: 4px 0 0 0;
}

@media all and (max-width: 1070px) {
  .main-description {
    display: none;
  }
}

.insurance-title {
  margin: 82px 0 0 0;
  height: 16px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}

@media all and (max-width: 480px) {
  .insurance-title {
    margin-top: 72px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
  }
}

.insurance-buttons {
  margin-top: 36px;
}

@media all and (max-width: 480px) {
  .insurance-buttons {
    margin-top: 28px;
  }
}

.last-insurance-btn {
  margin-left: 24px;
}

@media all and (max-width: 768px) {
  .last-insurance-btn {
    margin-left: 15px;
  }
}

@media all and (max-width: 480px) {
  .last-insurance-btn {
    margin-left: 8px;
  }
}

.insurance-option-button {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 36px;
  background: rgba(30, 22, 71, 0.16);
  backdrop-filter: blur(4px);
  border-radius: 50px;
  border: unset;
}

@media all and (max-width: 480px) {
  .insurance-option-button {
    padding: 10px 24px;
    height: 42px;
  }
}

.insurance-option-button:focus {
  background: rgba(30, 22, 71, 0.3) !important;
  box-shadow: unset !important;
}

.active-insurance-button {
  height: 66px;
  border: 1px solid #0AE29F;
  box-sizing: border-box;
  border-radius: 59px;
  padding: 0 10px;
}

@media all and (max-width: 480px) {
  .active-insurance-button {
    height: 58px;
  }
}

.active-button-background {
  background: rgba(30, 22, 71, 0.3) !important;
}

.insurance-button-text {
  height: 28px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 137.9%;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  flex: none;
  order: 0;
  flex-grow: 0;
}

@media all and (max-width: 480px) {
  .insurance-button-text {
    height: 22px;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0 10px;
  }
}

.insurance-active-text {
  font-weight: bold;
  color: #FFFFFF;
  height: 28px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 137.9%;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 10px;
}

@media all and (max-width: 480px) {
  .insurance-active-text {
    height: 22px;
    font-size: 16px;
  }
}

.insurance-package {
  margin-top: 66px;
}

@media all and (max-width: 480px) {
  .insurance-package {
    margin-top: 54px;
  }
}

.package-text {
  height: 16px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 0;
}

@media all and (max-width: 480px) {
  .package-text {
    height: 14px;
    font-size: 12px;
    line-height: 14px;
  }
}

.package-radio-buttons {
  margin-top: 26px;
}

.radio-button-label {
  height: 28px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 137.9%;
  color: #FFFFFF;
  margin-right: 15px;
  opacity: 0.7;
}

@media all and (max-width: 480px) {
  .radio-button-label {
    height: 22px;
    font-size: 16px;
    margin-top: 7px;
  }
}

.active-radio-button {
  height: 28px !important;
  font-weight: bold !important;
  opacity: unset !important;
}

@media all and (max-width: 480px) {
  .active-radio-button {
    height: 22px !important;
    font-size: 16px !important;
  }
  .last-radio-button {
    margin-top: 40px;
  }
}

/deep/ .custom-radio .custom-control-label::before {
  width: 24px;
  height: 24px;
  background: #1E1647;
  opacity: 0.3;
  backdrop-filter: blur(4px);
  border-radius: 50px;
}

/deep/ .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  width: 9px;
  height: 9px;
  top: 9px;
  left: -17px;
  background: #0AE29F;
  border-radius: 50px;
}

.results-button {
  margin-top: 82px;
  padding: 18px 40px;
  position: static;
  width: 229px;
  height: 54px;
  background: #0AE29F;
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: unset;
}

.results-button:focus {
  background: #0AE29F;
  box-shadow: unset;
}

@media all and (max-width: 480px) {
  .results-button {
    margin-top: 90px;
    padding: 0;
  }
}

.results-text {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  height: 18px;
  text-transform: uppercase;
  color: #045C41;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 10px;
}

.contact {
  margin-top: 80px;
}

.contact-text {
  height: 22px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.12em;
  color: #FFFFFF;
  opacity: 0.8;
}

.connect-stroke {
  width: 755px;
  border: 0.5px solid #FFFFFF;
  margin: 10px 30px 0 30px;
}

.icons {
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50px;
  margin-right: 40px;
}

//.messenger-icon {
//  position: absolute;
//  top: 8px;
//  right: 7px;
//  opacity: 0.8;
//}

@media all and (max-width: 480px) {
  .contact {
    display: none !important;
  }
}

</style>