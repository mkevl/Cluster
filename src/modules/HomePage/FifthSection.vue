<template>
  <div class="main-page-fifth-section">
    <object class="background-image" data="/assets/background_image_2.svg" type="image/svg+xml"/>
    <div class="d-flex benefits">
      <span class="benefits-stroke"/>
      <p class="benefits-title mb-0">სარგებელი ყველა მონაწილეს</p>
    </div>
    <div class="request-response-boxes" :class="{'d-flex justify-content-between': !isSmallScreen}">
      <div class="request" :class="{'active-box': isActiveRequest}"
           @mouseover="onMouseOver('request')"
           @mouseleave="onMouseLeave">
        <h1 class="box-title" :class="{'active-box-title': isActiveRequest}">მოთხოვნა</h1>
        <div v-if="isActiveRequest">
          <ul class="active-box-list">
            <li>ისარგებლე მსხვილი ბიზნესისთვის დამახასიათებელი უპირატესობებით</li>
            <li>შეამცირე ხარჯები</li>
            <li>დაზოგე დრო და ადამიანური რესურსი</li>
            <li>ინდივიდუალურად მორგებული შესყიდვების პროცესი</li>
          </ul>
          <contact-button v-if="!isSmallScreen" class="box-contact-button"/>
        </div>
      </div>
      <div class="response" :class="{'active-box': isActiveResponse}"
           @mouseover="onMouseOver('response')"
           @mouseleave="onMouseLeave">
        <h1 class="box-title" :class="{'active-box-title': isActiveResponse}">მიწოდება</h1>
        <div v-if="isActiveResponse">
          <ul class="active-box-list">
            <li> იპოვე შენი პროდუქტის მომხმარებლები ნულოვანი დანახარჯით</li>
            <li>გააფორმე მსხვილი გაყიდვები</li>
          </ul>
          <contact-button v-if="!isSmallScreen" class="box-contact-button"/>
        </div>
      </div>
      <contact-button v-if="isSmallScreen" class="box-contact-button-sm"/>
    </div>
  </div>
</template>

<script>
import ContactButton from "./ContactButton";

export default {
  name: "FifthSection",
  components: {ContactButton},
  data() {
    return {
      activeBox: {
        request: false,
        response: false,
      },
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isSmallScreen() {
      return this.windowWidth <= 1330
    },
    isActiveRequest() {
      return this.activeBox.request || this.isSmallScreen
    },
    isActiveResponse() {
      return this.activeBox.response || this.isSmallScreen
    }
  },
  methods: {
    onMouseOver(type) {
      if (type === 'request') {
        this.activeBox.request = true
      } else {
        this.activeBox.response = true
      }
    },
    onMouseLeave() {
      this.activeBox.request = false
      this.activeBox.response = false
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

.main-page-fifth-section {
  position: relative;
  height: 1024px;
  background: linear-gradient(136.35deg, #2C1D7A -16.03%, #1E1647 75.59%);
  overflow: hidden;
}

.background-image {
  width: 100%;
}

.benefits {
  position: absolute;
  left: 125px;
  top: 140px;
}

.benefits-stroke {
  width: 2px;
  height: 17px;
  background: #FFFFFF;
}

.benefits-title {
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

.request-response-boxes {
  position: absolute;
  top: 257px;
  margin-left: 127px;
  width: 80%;
}

.request {
  width: 300px;
  height: 545px;
  background: #1E1647;
  border-radius: 40px;
}

.response {
  width: 300px;
  height: 545px;
  background: #1E1647;
  border-radius: 40px;
  margin-left: 15px;
}

.active-box {
  border: 1px solid #0AE29F;
  box-sizing: border-box;
  width: 792px;
}

.box-title {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 160%;
  color: #FFFFFF;
  margin-left: 40px;
  margin-top: 104px;
  width: 214px;
  height: 46px;
}

.active-box-title {
  color: #0AE29F;
  margin-left: 72px;
  width: 610px;
}

.active-box-list {
  list-style-type: disc;
  width: 655px;
  height: 187px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #FFFFFF;
  opacity: 0.8;
  margin: 50px 0 0 52px;
}

.box-contact-button {
  margin-left: 76px;
  margin-bottom: 73px;
}

.box-contact-button-sm {
  position: absolute;
  bottom: -100px;
  margin: 0 0 0 10px;
}

@media all and (max-width: 1330px) {
  .main-page-fifth-section {
    width: 100%;
    height: 1150px;
  }

  .background-image {
    height: 1150px;
    width: unset;
  }

  .request-response-boxes {
    top: 220px;
    margin-left: 115px;
  }

  .request {
    margin-left: unset;
    height: 407px;
  }

  .response {
    margin-left: unset;
    margin-right: 150px;
    margin-top: 40px;
    height: 292px;
  }

  .active-box {
    width: 95%;
  }

  .active-box-title {
    margin-left: 50px;
    margin-top: 48px;
  }

  .active-box-list {
    width: 85%;
    margin: 30px 0 0 35px;
    padding: 0 0 0 35px;
  }
}

@media all and (max-width: 700px) {
  .main-page-fifth-section {
    height: 1200px;
  }

  .background-image {
    height: 1200px;
  }

  .benefits {
    left: 30px;
    top: 91px;
  }

  .benefits-title {
    font-size: 14px;
    margin-top: -3px;
  }

  .request-response-boxes {
    margin-left: 26px;
    top: 190px;
  }

  .request {
    height: 470px;
  }

  .active-box {
    width: 100%;
  }

  .active-box-title {
    width: 274px;
    height: 35px;
    font-size: 23px;
    margin-left: 20px;
    margin-top: 48px;
  }

  .active-box-list {
    margin: 20px 0 0 0;
  }
}

@media all and (max-width: 320px) {
  .main-page-fifth-section {
    height: 1350px;
  }

  .background-image {
    height: 1350px;
  }

  .request-response-boxes {
    margin-left: 26px;
    top: 170px;
  }

  .request {
    height: 550px;
  }

  .response {
    height: 400px;
  }
}
</style>