<template>
  <div class="main-page-fifth-section">
    <object class="background-image" data="/assets/background_image_2.svg" type="image/svg+xml"/>
    <div class="d-flex benefits">
      <span class="benefits-stroke"/>
      <p class="benefits-title mb-0">სარგებელი ყველა მონაწილეს</p>
    </div>
    <div class="request-response-boxes" :class="{'d-flex': !isSmallScreen}">
      <div class="request" :class="{'active-box': isActiveRequest}" @click="onBoxCLick('request')">
        <h1 class="box-title" :class="{'active-box-title': isActiveRequest}">მოთხოვნა</h1>
        <div v-if="isActiveRequest">
          <ul class="active-box-list">
            <li>ისარგებლე მსხვილი ბიზნესისთვის დამახასიათებელი უპირატესობებით</li>
            <li>შეამცირე ხარჯები</li>
            <li>დაზოგე დრო და ადამიანური რესურსი</li>
            <li>ინდივიდუალურად მორგებული შესყიდვების პროცესი</li>
          </ul>
          <contact-button v-if="!isSmallScreen" class="box-contact-button" :text-style="textStyle"/>
        </div>
      </div>
      <div class="response" :class="{'active-box': isActiveResponse}" @click="onBoxCLick('response')">
        <h1 class="box-title" :class="{'active-box-title': isActiveResponse}">მიწოდება</h1>
        <div v-if="isActiveResponse">
          <ul class="active-box-list">
            <li> იპოვე შენი პროდუქტის მომხმარებლები ნულოვანი დანახარჯით</li>
            <li>გააფორმე მსხვილი გაყიდვები</li>
          </ul>
          <contact-button v-if="!isSmallScreen" class="box-contact-button" :text-style="textStyle"/>
        </div>
      </div>
      <contact-button v-if="isSmallScreen" class="box-contact-button-sm" :text-style="textStyle"/>
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
        request: true,
        response: false,
      },
      windowWidth: window.innerWidth,
      textStyle: {color: '#095A66'},
    }
  },
  computed: {
    isSmallScreen() {
      return this.windowWidth <= 480
    },
    isActiveRequest() {
      return this.activeBox.request || this.isSmallScreen
    },
    isActiveResponse() {
      return this.activeBox.response || this.isSmallScreen
    }
  },
  methods: {
    onBoxCLick(type) {
      if (type === 'request') {
        this.activeBox.request = true
        this.activeBox.response = false
      } else {
        this.activeBox.request = false
        this.activeBox.response = true
      }
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

@media all and (max-width: 480px) {
  .main-page-fifth-section {
    width: 415px;
    height: 1150px;
  }

  .background-image {
    height: 1150px;
    width: unset;
  }

  .benefits {
    left: 26px;
    top: 91px;
  }

  .benefits-title {
    height: 34px;
    font-size: 20px;
    margin-top: -7px;
  }
}

.request-response-boxes {
  position: absolute;
  top: 257px;
}

.request {
  width: 272px;
  height: 545px;
  background: #1E1647;
  border-radius: 40px;
  margin-left: 127px;
}

.response {
  width: 272px;
  height: 545px;
  background: #1E1647;
  border-radius: 40px;
  margin-left: 144px;
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

@media all and (max-width: 480px) {
  .request-response-boxes {
    top: 190px;
    margin-left: 26px;
  }

  .request {
    margin-left: unset;
    height: 407px;
  }

  .response {
    margin-left: unset;
    margin-top: 40px;
    height: 292px;
  }

  .active-box {
    width: 338px;
  }

  .active-box-title {
    width: 274px;
    height: 35px;
    font-size: 23px;
    margin-left: 20px;
    margin-top: 48px;
  }

  .active-box-list {
    font-size: 18px;
    height: 248px;
    width: 329px;
    margin: 20px 0 0 0;
    padding: 0 0 0 35px;
  }
}

.box-contact-button {
  margin-left: 76px;
  margin-bottom: 73px;
}

.box-contact-button-sm {
  margin-top: 64px;
}
</style>