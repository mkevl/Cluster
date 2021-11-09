<template>
  <div class="main-page-fourth-section">
    <div class="d-flex more-information">
      <div class="about">
        <div class="d-flex info">
          <span class="info-stroke"/>
          <p class="info-title mb-0">მეტი ინფორმაცია</p>
        </div>
        <p class="info-description mb-0">
          კლასტერის კორპორაციული ხედვაა, გაააზრებინოს მსოფლიოს მასშტაბით, ადამიანებსა და ბიზნესებს მათი ერთიანობის
          სარფიანობა და გონივრულობა.
        </p>
        <div class="d-flex more-info-icons">
          <a class="info-icons" :href="`mailto:${email}`">
            <img src="/assets/icons/email_green_icon.svg" alt="">
          </a>
          <a class="info-icons" :href="`https://wa.me/${phoneNumber}`" target='_blank'>
            <img src="/assets/icons/whatsapp_green_icon.svg" alt="">
          </a>
          <!--<a class="info-icons ml-5" :href="`https://www.m.me/${messengerUrl}`" target='_blank'>
              <img class="info-messenger-icon" src="/assets/icons/messenger_green_icon.svg" alt="">
           </a>-->
        </div>
        <contact-button class="info-contact-button" :text-style="textStyle"/>
        <img class="info-video" :src="getVideoImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import ContactButton from "./ContactButton";

export default {
  name: "FourthSection",
  components: {ContactButton},
  props: {
    email: String,
    phoneNumber: String,
    // messengerUrl: String,
  },
  data() {
    return {
      textStyle: {color: '#095A66'},
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    getVideoImg() {
      return this.windowWidth <= 480 ? 'assets/tmp_sm_video.png' : 'assets/tmp_video.png'
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

.main-page-fourth-section {
  position: relative;
  height: 1024px;
  background: #F8F9FA;
}

.more-information {
  position: absolute;
  width: 1347px;
  height: 631px;
  left: 93px;
  top: 196.5px;
  background: linear-gradient(139.74deg, #2C1D7A 5.01%, #1E1647 77.08%);
  border-radius: 200px 0 0 40px;
}

@media all and (max-width: 480px) {
  .main-page-fourth-section {
    height: 1049px;
  }

  .more-information {
    width: 374px;
    height: 887px;
    left: 40px;
    top: 88px;
    background: linear-gradient(139.74deg, #2C1D7A 5.01%, #1E1647 77.08%);
    border-radius: 64px 0 0 64px;
  }
}

.info {
  position: absolute;
  left: 108px;
  top: 155px;
}

.info-stroke {
  width: 2px;
  height: 17px;
  background: #FFFFFF;
}

.info-title {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 176.4%;
  color: #FFFFFF;
  margin-top: -10px;
  margin-left: 13px;
  width: 479px;
  height: 77px;
}

@media all and (max-width: 480px) {
  .info {
    left: 41px;
    top: 79px;
  }

  .info-title {
    height: 34px;
    font-size: 20px;
    margin-top: -6px;
  }
}

.info-description {
  position: absolute;
  width: 448px;
  height: 159px;
  left: 108px;
  top: 213px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #FFFFFF;
}

@media all and (max-width: 480px) {
  .info-description {
    width: 310px;
    left: 41px;
    top: 134px;
    font-size: 16px;
  }
}


.more-info-icons {
  position: absolute;
  left: 108px;
  top: 402px;
}

.info-icons {
  width: 34px;
  height: 34px;
  background: rgba(10, 226, 159, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50px;
  margin-right: 34px;
}

@media all and (max-width: 480px) {
  .more-info-icons {
    left: 41px;
    top: 340px;
  }

  .info-icons {
    margin-right: 32px;
  }
}

/*.info-messenger-icon {
  position: absolute;
  top: 8px;
  right: 7px;
  opacity: 0.8;
}*/

.info-contact-button {
  position: absolute;
  left: 108px;
  top: 490px;
}

@media all and (max-width: 480px) {
  .info-contact-button {
    left: 41px;
    top: 421px;
    margin: 0 !important;
  }
}

.info-video {
  position: absolute;
  top: 155px;
  right: 0;
}

@media all and (max-width: 480px) {
  .info-video {
    top: 560px;
  }
}
</style>