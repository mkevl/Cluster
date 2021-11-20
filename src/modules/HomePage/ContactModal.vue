<template>
  <div class="contact-modal">
    <div class="first-layer"/>
    <div class="second-layer"/>
    <div class="third-layer"/>
    <div class="close-modal" :class="{'d-flex': !isSmallScreen}" @click="hideModal">
      <img src="/assets/close_button.png" alt="">
      <span v-if="!isSmallScreen" class="ml-2">დახურვა</span>
    </div>
    <span class="contact-stroke"/>
    <p class="contact-title">დაგვიკავშირდი</p>
    <p class="contact-description">დაგვიკავშირდი შენთვის მოსახერხებელი გზით ნებისმიერ დროს.</p>
    <b-button v-if="isSmallScreen" class="call-button" :href="`tel:${phoneNumber}`">
      <span class="call-text">დარეკვა</span>
    </b-button>
    <b-button class="google-form-button" :href="googleForm" target='_blank'>
      <span class="google-form-text">ფორმა</span>
    </b-button>
    <b-button class="mail-button" :href="`mailto:${email}`">
      <span class="mail-text">გამოგვიგზავნე მეილი</span>
    </b-button>
    <a class="whatsapp-icon" :href="`https://wa.me/${phoneNumber}`" target='_blank'>
      <img class="whatsapp-img" src="/assets/icons/whatsapp_green_icon.svg" alt="">
    </a>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "ContactModal",
  props: {
    phoneNumber: String,
    email: String,
    googleForm: String,
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    ...mapState({
      scrollYPosition: state => state.scrollYPosition,
    }),
    isSmallScreen() {
      return this.windowWidth <= 480
    },
  },
  methods: {
    ...mapActions(['hideContactModal']),
    async hideModal() {
      await this.hideContactModal()
      window.scroll(0, this.scrollYPosition)
    },
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
  left: 1017px;
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
    left: unset;
    width: auto;
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
  max-width: 627px;
  max-height: 52px;
  left: 397px;
  top: 390px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  color: #EAE2FF;
}

@media all and (max-width: 480px) {
  .contact-stroke {
    top: 187px;
    left: 27px;
  }

  .contact-title {
    width: auto;
    top: 175px;
    left: 42px;
  }

  .contact-description {
    max-width: 334px;
    max-height: 104px;
    left: 40px;
    top: 251px;
  }
}

@media all and (max-width: 480px) {
  .call-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    width: 156px;
    height: 54px;
    left: 40px;
    top: 431px;
    filter: drop-shadow(0px 20px 40px rgba(10, 226, 159, 0.2));
    border-radius: 16px;
    background: #0AE29F;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0;
  }

  .call-button:focus {
    background: #0AE29F !important;
    box-shadow: unset !important;
  }

  .call-text {
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
    margin: 0 10px;
  }
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

.google-form-button:focus {
  background: #0AE29F !important;
  box-shadow: unset !important;
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
  margin: 0 10px;
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

.mail-button:focus {
  background: rgba(10, 226, 159, 0.1) !important;
  box-shadow: unset !important;
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

@media all and(max-width: 480px) {
  .google-form-button {
    left: 42px;
    top: 509px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 16px;
    background: rgba(10, 226, 159, 0.1);
    margin: 0 !important;
  }

  .google-form-button:focus {
    background: rgba(10, 226, 159, 0.1) !important;
    box-shadow: unset !important;
  }

  .google-form-text {
    left: 40px;
    top: 18px;
    color: #0AE29F;
  }

  .mail-button {
    position: absolute;
    left: 40px;
    top: 589px;
    margin: 0;
  }
}

.whatsapp-icon {
  position: absolute;
  width: 53.93px;
  height: 53.93px;
  left: 890px;
  top: 506px;
  margin-left: 32px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50px;
}

@media all and (max-width: 480px) {
  .whatsapp-icon {
    left: 40px;
    top: 700px;
    margin: 0;
  }
}

.whatsapp-img {
  width: 53.93px;
  height: 53.93px;
}
</style>