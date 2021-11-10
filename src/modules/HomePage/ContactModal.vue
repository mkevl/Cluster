<template>
  <div class="contact-modal">
    <div class="first-layer"/>
    <div class="second-layer"/>
    <div class="third-layer"/>
    <div class="d-flex close-modal" @click="hideContactModal">
      <img src="/assets/close_button.png" alt="">
      <span v-if="!isSmallScreen" class="ml-2">დახურვა</span>
    </div>
    <span class="contact-stroke"/>
    <p class="contact-title">დაგვიკავშირდი</p>
    <p class="contact-description">
      Cluster is made to optimize your expenses,
      whether you are a physical entity or running a business of any size.
      Paying less in stuff and services
    </p>
    <b-button v-if="isSmallScreen" class="call-button">
      <span class="call-text">დარეკვა</span>
    </b-button>
    <b-button class="google-form-button">
      <span class="google-form-text">ფორმა</span>
    </b-button>
    <b-button class="mail-button">
      <span class="mail-text">გამოგვიგზავნე მეილი</span>
    </b-button>
    <object class="whatsapp-icon" data="assets/icons/whatsapp_green_icon.svg" type="image/svg+xml"/>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapActions} = createNamespacedHelpers('results');
export default {
  name: "ContactModal",
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isSmallScreen() {
      return this.windowWidth <= 480
    },
  },
  methods: {
    ...mapActions(['hideContactModal']),
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

.first-layer {
  position: absolute;
  width: 100%;
  height: 1024px;
  background: #1E1647;
  opacity: 0.9;
  top: 0;
  backdrop-filter: blur(4px);
}

.second-layer {
  position: absolute;
  width: 802px;
  height: 368.93px;
  left: 319px;
  top: 275.86px;
  background: #1E1647;
  backdrop-filter: blur(4px);
  border-radius: 40px;
}

.third-layer {
  position: absolute;
  width: 802px;
  height: 369.36px;
  left: 319px;
  top: 275.64px;
  background: linear-gradient(107.26deg, #2B198A -0.48%, rgba(35, 26, 83, 0) 35.91%);
  opacity: 0.8;
  border-radius: 40px;
}

@media all and (max-width: 480px) {
  .first-layer {
    display: none;
  }

  .second-layer {
    left: 0;
    top: 0;
    width: 100%;
    height: 896px;
    border-radius: unset;
    overflow-y: hidden;
  }

  .third-layer {
    left: 0;
    top: 0;
    width: 100%;
    height: 896px;
    border-radius: unset;
    overflow-y: hidden;
  }
}

.close-modal {
  cursor: pointer;
  position: absolute;
  width: 72px;
  height: 18px;
  right: 350px;
  top: 233px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
}

@media all and (max-width: 480px) {
  .close-modal {
    top: 99px;
    right: 40px;
  }
}

.contact-stroke {
  position: absolute;
  width: 2px;
  height: 17px;
  left: 397px;
  top: 341px;
  background: #D7CAFD;
}

.contact-title {
  position: absolute;
  width: 479px;
  height: 40px;
  left: 412px;
  top: 326px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 176.4%;
  color: #D7CAFD;
}

.contact-description {
  position: absolute;
  width: 627px;
  height: 52px;
  left: 397px;
  top: 390px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  color: #EAE2FF;
}

.google-form-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 54px;
  left: 394px;
  top: 506px;
  filter: drop-shadow(0px 20px 40px rgba(10, 226, 159, 0.2));
  border-radius: 16px;
  padding: 18px 40px;
  position: absolute;
  background: #0AE29F;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
}

.google-form-text {
  position: static;
  width: 76px;
  height: 18px;
  left: 40px;
  top: 18px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #095A66;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}

.mail-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 40px;
  position: absolute;
  width: 276px;
  height: 54px;
  left: 582px;
  top: 506px;
  background: rgba(10, 226, 159, 0.1);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 16px;
}

.mail-text {
  position: static;
  width: 196px;
  height: 18px;
  left: 40px;
  top: 18px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #0AE29F;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 10px;
}

.whatsapp-icon {
  position: absolute;
  width: 53.93px;
  height: 53.93px;
  left: 890px;
  top: 506px;
  margin-left: 32px;
}
</style>