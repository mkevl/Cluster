<template>
  <div class="main-page">
    <first-section :phone-number="NUMBER" :email="EMAIL" @on-see-results-click="onResultsCLick"/>
    <!--<div v-if="showResultsModal" class="results-modal">
      <div class="background-layers">
        <div class="modal-first-layer">
          <div class="d-flex close-modal" @click="hideResultsModal">
            <img src="/assets/close_button.png" alt="">
            <span class="ml-2">დახურვა</span>
          </div>
        </div>
        <div class="modal-second-layer"/>
        <div class="modal-third-layer"/>
      </div>
      <div class="results-modal-content">
        <div class="d-flex modal-headers">
          <p class="header-one mb-0">ჯანმრთელობის დაზღვევა</p>
          <p class="header-two mb-0">- გაუმჯობესებული პაკეტი</p>
        </div>
        <div class="row month-calculation-box">
          <div class="col-6">
            <object data="/assets/time_background.svg" type="image/svg+xml"/>
            <div class="time-calculation-container">
              <span class="left-text">დარჩა</span>
              <span class="day-number-text mt-3">{{ getDays }}</span>
              <span class="day-text">დღე</span>
            </div>
          </div>
          <div class="col-6">
                  <span class="box-description">
                    Cluster is made to optimize your expenses,
                    whether you are a physical entity or running a business of any size.
                    Paying less in stuff and services
                </span>
            <b-button class="modal-contact-button" @click="onConnectClick">
              <span class="modal-button-text">დაგვიკავშირდი</span>
            </b-button>
          </div>
        </div>
        &lt;!&ndash;<div>
          <span>კლასტერი რიცხვებში</span>
          <div class="row">
            <div class="col-6">
              <div class="clusters-box"></div>
              <div class="clusters-text"></div>
              <div class="clusters-quantity">
                <span>კომპანია</span>
              </div>
            </div>
            <div class="col-6">
              <div class="clusters-box"></div>
              <div class="clusters-text"></div>
              <div class="clusters-quantity">
                <span>ადამიანი</span>
              </div>
            </div>
          </div>
        </div>&ndash;&gt;
      </div>
    </div>-->
    <div>
      <second-section/>
      <third-section/>
      <fourth-section :phone-number="NUMBER" :email="EMAIL"/>
      <fifth-section/>
    </div>
  </div>
</template>

<script>
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";

export default {
  name: "HomePage",
  components: {FifthSection, FourthSection, ThirdSection, SecondSection, FirstSection},
  data() {
    return {
      MESSENGER_URL: 'process.env.MESSENGER_URL',
      NUMBER: 'process.env.NUMBER',
      EMAIL: 'process.env.EMAIL',
      showResultsModal: false,
    }
  },
  computed: {
    /*getPageHeight() {
      return this.showResultsModal ? {} : {height: '100%'}
    },*/
    getDays() {
      const date = new Date(), y = date.getFullYear(), m = date.getMonth(), currentDay = date.getDate();
      const monthLastDay = new Date(y, m + 1, 0).getDate();
      return monthLastDay - currentDay;
    },
  },
  methods: {
    onResultsCLick(insurance, selectedPackage) {
      this.showResultsModal = true;
    },
    hideResultsModal() {
      this.showResultsModal = false;
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

/deep/ ul {
  list-style-type: none;
}

.results-modal {
  .background-layers {
    .modal-first-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #1E1647;
      opacity: 0.9;
      top: 0;
      backdrop-filter: blur(4px);

      .close-modal {
        cursor: pointer;
        position: absolute;
        width: 72px;
        height: 18px;
        right: 124px;
        top: 53px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        color: #FFFFFF;
      }
    }

    .modal-second-layer {
      position: absolute;
      width: 1270px;
      height: 926px;
      left: 85px;
      top: 96px;
      background: #1E1647;
      backdrop-filter: blur(4px);
      border-radius: 100px 100px 0 0;
    }

    .modal-third-layer {
      position: absolute;
      width: 1231px;
      height: 927px;
      left: 85px;
      top: 96px;
      background: linear-gradient(107.26deg, #2B198A -0.48%, rgba(35, 26, 83, 0) 35.91%);
      opacity: 0.8;
      border-radius: 100px 100px 0 0;
    }
  }

  .results-modal-content {
    .modal-headers {
      .header-one {
        position: absolute;
        height: 26px;
        left: 164px;
        top: 158px;
        font-family: Helvetica;
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
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #D7CAFD;
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

      .computed-number {
        width: 364.89px;
        height: 364.17px;

      }

      .time-calculation-container {
        position: absolute;
        width: 53px;
        height: 134px;
        left: 170px;
        bottom: 120px;

        .left-text {
          position: absolute;
          width: 51px;
          height: 18px;
          font-family: Helvetica;
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
          font-family: Montserrat;
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
          font-family: Montserrat;
          font-style: normal;
          font-weight: 800;
          font-size: 24px;
          line-height: 160%;
          text-align: center;
          color: #0AE29F;
        }
      }

      .box-description {
        position: absolute;
        width: 311px;
        height: 104px;
        top: 47px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #D7C9FE;
        margin-left: 10px;
      }
    }

    .modal-contact-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;
      position: absolute;
      width: 221px;
      height: 54px;
      top: 272px;
      background: #0AE29F;
      filter: drop-shadow(0px 20px 40px rgba(10, 226, 159, 0.2));
      border-radius: 16px;

      .modal-button-text {
        font-family: Helvetica;
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
    }
  }
}

</style>