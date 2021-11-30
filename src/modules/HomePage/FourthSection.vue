<template>
  <div class="main-page-fourth-section">
    <div class="more-information container-fluid">
      <div class="row about p-0">
        <div class="col-lg-6 col-md-12 p-0">
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
          <contact-button class="info-contact-button"/>
        </div>
        <div class="col-lg-6 col-md-12 p-0">
          <iframe class="info-video" src="https://www.youtube.com/embed/km35300V-RY" title="YouTube video player"
                  frameborder="0" allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
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
  width: calc(100% - 93px);
  height: 631px;
  left: 93px;
  top: 196.5px;
  background: linear-gradient(139.74deg, #2C1D7A 5.01%, #1E1647 77.08%);
  border-radius: 200px 0 0 40px;
}

.about {
  margin-left: 0;
}

.info {
  margin: 155px 0 0 108px;
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

.info-description {
  max-width: 448px;
  height: 159px;
  margin-left: 108px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #FFFFFF;
}

.more-info-icons {
  margin-left: 108px;
}

.info-icons {
  width: 34px;
  height: 34px;
  background: rgba(10, 226, 159, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50px;
  margin-right: 34px;
}

/*.info-messenger-icon {
  position: absolute;
  top: 8px;
  right: 7px;
  opacity: 0.8;
}*/

.info-contact-button {
  margin: 54px 0 0 195px;
}

.info-video {
  margin-top: 155px;
  right: 0;
  width: 100%;
  height: 384px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}

@media all and (max-width: 992px) {
  .main-page-fourth-section {
    height: 1049px;
  }

  .more-information {
    height: 887px;
    width: calc(100% - 40px);
    left: 40px;
    top: 88px;
    background: linear-gradient(139.74deg, #2C1D7A 5.01%, #1E1647 77.08%);
    border-radius: 64px 0 0 64px;
  }

  .info {
    margin-left: 41px;
    margin-top: 79px;
  }

  .info-title {
    height: 34px;
    font-size: 20px;
    margin-top: -6px;
  }

  .info-description {
    max-width: 600px;
    margin-left: 41px;
    margin-top: 21px;
    font-size: 16px;
    margin-right: 79px;
  }

  .more-info-icons {
    margin-left: 41px;
  }

  .info-icons {
    margin-right: 32px;
  }

  .info-contact-button {
    margin: 41px 0 0 41px;
  }

  .info-video {
    margin-top: 45px;
  }
}

@media all and (max-width: 480px) {
  .info-description {
    max-width: 310px;
    margin-top: 21px;
  }

  .info-icons {
    margin-top: 47px;
  }

  .info-video {
    height: unset;
    margin-top: 80px;
  }
}

@media all and (max-width: 320px) {
  .main-page-fourth-section {
    height: 958px;
  }

  .more-information {
    left: 25px;
    height: 796px;
  }

  .info {
    margin-left: 25px;
  }

  .info-title {
    font-size: 14px;
    margin-top: -3px;
  }

  .info-description {
    margin-left: 25px;
    margin-right: 45px;
  }

  .more-info-icons {
    margin-left: 25px;
  }

  .info-contact-button {
    margin-left: 25px;
  }
}
</style>