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
      <!--<div class="main-page-level-3">
        <div class="d-flex providers">
          <span class="provider-stroke"/>
          <p class="provider-title ml-3 mb-0">პარტნიორი სადაზღვეო კომპანიები</p>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <ul class="providers-list">
              <li v-for="(item, index) in providers" :key="index" class="providers-list-item"
                  :class="{'active-provider-item': item.isActive}" @click="setActiveProvider(item)">
                <img :src="item.img_url" alt=""/>
              </li>
            </ul>
            <img class="provider-scroll" src="/assets/scroll_vector.svg" alt=""/>
          </div>
          <div class="provider-info">
            <img :src="activeProvider.logo_url" alt=""/>
            <h1 class="provider-info-title mt-4 ml-2">{{ activeProvider.title }}</h1>
            <p class="provider-info-description ml-2 mb-0 mt-4">{{ activeProvider.description }}</p>
            <div v-if="activeProvider.tel" class="d-flex mt-5">
              <object data="/assets/providers/call_icon.svg" type="image/svg+xml"/>
              <a class="provider-info-contact ml-2" :href="`tel:${activeProvider.tel}`">{{ activeProvider.tel }}</a>
            </div>
            <div v-if="activeProvider.link" class="d-flex mt-3">
              <object data="/assets/providers/browser_icon.svg" type="image/svg+xml"/>
              <a class="provider-info-contact ml-2" :href="activeProvider.link">{{ activeProvider.link }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-page-level-4">
        <div class="d-flex more-information">
          <div class="about">
            <div class="d-flex info">
              <span class="info-stroke"/>
              <p class="info-title ml-3 mb-0">მეტი ინფორმაცია</p>
            </div>
            <p class="info-description">
              კლასტერის კორპორაციული ხედვაა, გაააზრებინოს მსოფლიოს მასშტაბით, ადამიანებსა და ბიზნესებს მათი ერთიანობის
              სარფიანობა და გონივრულობა.
            </p>
            <div class="d-flex more-info-icons">
              <a class="info-icons" :href="`mailto:${EMAIL}`">
                <img src="/assets/icons/email_green_icon.svg" alt="">
              </a>
              <a class="info-icons ml-5" :href="`https://wa.me/${NUMBER}`" target='_blank'>
                <img src="/assets/icons/whatsapp_green_icon.svg" alt="">
              </a>
              <a class="info-icons ml-5" :href="`https://www.m.me/${MESSENGER_URL}`" target='_blank'>
                <img class="info-messenger-icon" src="/assets/icons/messenger_green_icon.svg" alt="">
              </a>
            </div>
            <b-button class="info-contact-button" @click="onConnectClick">
              <span class="info-button-text">დაგვიკავშირდი</span>
            </b-button>
            <img class="info-video" src="assets/tmp_video.png" alt="">
          </div>
          <div class="video"></div>
        </div>
      </div>
      <div class="main-page-level-5">
        <object data="/assets/background_image_2.svg" type="image/svg+xml"/>
        <div class="d-flex benefits">
          <span class="benefits-stroke"/>
          <p class="benefits-title ml-3 mb-0">სარგებელი ყველა მონაწილეს</p>
        </div>
        <div class="d-flex request-response-boxes mt-5">
          <div class="request" :class="{'active-box': activeBox.request}" @click="onBoxCLick('request')">
            <h1 class="box-title" :class="{'active-box-title': activeBox.request}">მოთხოვნა</h1>
            <div v-if="activeBox.request">
              <p class="active-box-list mb-0 mt-5">
                &bull; ისარგებლე მსხვილი ბიზნესისთვის დამახასიათებელი უპირატესობებით <br/>
                &bull; შეამცირე ხარჯები <br/>
                &bull; დაზოგე დრო და ადამიანური რესურსი <br/>
                &bull; ინდივიდუალურად მორგებული შესყიდვების პროცესი
              </p>
              <b-button class="box-contact-button" @click="onConnectClick">
                <span class="box-button-text">დაგვიკავშირდი</span>
              </b-button>
            </div>
          </div>
          <div class="response" :class="{'active-box': activeBox.response}" @click="onBoxCLick('response')">
            <h1 class="box-title" :class="{'active-box-title': activeBox.response}">მიწოდება</h1>
            <div v-if="activeBox.response">
              <p class="active-box-list mb-0 mt-5">
                &bull; იპოვე შენი პროდუქტის მომხმარებლები ნულოვანი დანახარჯით <br/>
                &bull; გააფორმე მსხვილი გაყიდვები
              </p>
              <b-button class="box-contact-button" @click="onConnectClick">
                <span class="box-button-text">დაგვიკავშირდი</span>
              </b-button>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

export default {
  name: "HomePage",
  components: {SecondSection, FirstSection},
  data() {
    return {
      MESSENGER_URL: 'process.env.MESSENGER_URL',
      NUMBER: 'process.env.NUMBER',
      EMAIL: 'process.env.EMAIL',
      providers: [
        {
          id: 1,
          img_url: '/assets/providers/tbc.png',
          isActive: true,
          logo_url: 'assets/providers/tbc_logo.png',
          title: 'TBC დაზღვევა',
          description: 'თიბისი დაზღვევა თანამედროვე სადაზღვევო კომპანიაა. ჩვენი მიზანია ციფრული და ტექნოლოგიური მიდგომებით, დაზღვევა მარტივი და ყველასთვის ხელმისაწვდომი გავხადოთ.',
          tel: '0322 272 727',
          link: 'tbcinsurance.ge'
        },
        {
          id: 2,
          img_url: '/assets/providers/irao.png',
          isActive: false,
          logo_url: '',
          title: '',
          description: '',
          tel: '',
          link: ''
        },
        {
          id: 3,
          img_url: '/assets/providers/ardi.png',
          isActive: false,
          logo_url: '',
          title: '',
          description: '',
          tel: '',
          link: ''
        },
        {
          id: 4,
          img_url: '/assets/providers/gpi.png',
          isActive: false,
          logo_url: '',
          title: '',
          description: '',
          tel: '',
          link: ''
        },
        {
          id: 5,
          img_url: '/assets/providers/alfa.png',
          isActive: false,
          logo_url: '',
          title: '',
          description: '',
          tel: '',
          link: ''
        },
      ],
      activeProvider: {},
      activeBox: {
        request: true,
        response: false,
      },
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
    onBoxCLick(type) {
      if (type === 'request') {
        this.activeBox.request = true
        this.activeBox.response = false
      } else {
        this.activeBox.request = false
        this.activeBox.response = true
      }
    },
    setActiveProvider(item) {
      this.providers.map(list => {
        if (list.id === item.id) {
          list.isActive = true
          this.activeProvider = {...list}
        } else {
          list.isActive = false
        }
        return list
      })
    },
    onConnectClick() {

    },
    onResultsCLick(insurance, selectedPackage) {
      this.showResultsModal = true;
    },
    hideResultsModal() {
      this.showResultsModal = false;
    },
  },
  mounted() {
    this.activeProvider = {...this.providers[0]}
  }
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

.main-page {
    .main-page-level-3 {
    position: relative;
    height: 1024px;
    left: 116px;

    .providers {
      .provider-stroke {
        width: 2px;
        height: 17px;
        background: #6335E9;
        border: 1px solid #6335E9;
        box-sizing: border-box;
      }

      .provider-title {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 176.4%;
        color: #1E1647;
        margin-top: -13px;
      }
    }

    .provider-scroll {
      margin-left: 64px;
      cursor: pointer;
    }

    .providers-list {
      :first-child {
        margin-top: 20px;
      }

      .providers-list-item {
        //opacity: 0.5%;
        cursor: pointer;
        mix-blend-mode: luminosity;
      }

      .active-provider-item {
        mix-blend-mode: unset;
      }
    }

    .provider-info {
      position: absolute;
      left: 500px;
      top: 126px;

      .provider-info-title {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 160%;
        color: #212529;
      }

      .provider-info-description {
        width: 655px;
        height: 187px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 170%;
        color: #212529;
      }

      .provider-info-contact {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #606870;
        text-decoration: none;
      }
    }
  }

  .main-page-level-4 {
    position: relative;
    height: 1024px;
    background: #F8F9FA;

    .more-information {
      position: absolute;
      width: 1347px;
      height: 631px;
      left: 93px;
      top: 196.5px;
      background: linear-gradient(139.74deg, #2C1D7A 5.01%, #1E1647 77.08%);
      border-radius: 200px 0 0 40px;

      .info {
        position: absolute;
        left: 108px;
        top: 155px;

        .info-stroke {
          width: 2px;
          height: 17px;
          background: #FFFFFF;
        }

        .info-title {
          font-family: Helvetica;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 176.4%;
          color: #FFFFFF;
          margin-top: -13px;
        }
      }

      .info-description {
        position: absolute;
        width: 448px;
        height: 159px;
        left: 108px;
        top: 213px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 170%;
        color: #FFFFFF;
      }

      .more-info-icons {
        position: absolute;
        left: 108px;
        top: 402px;

        .info-icons {
          width: 34px;
          height: 34px;
          background: rgba(10, 226, 159, 0.2);
          backdrop-filter: blur(4px);
          border-radius: 50px;

          .info-messenger-icon {
            position: absolute;
            top: 8px;
            right: 7px;
            opacity: 0.8;
          }
        }
      }

      .info-contact-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        position: absolute;
        width: 221px;
        height: 54px;
        left: 108px;
        top: 490px;
        background: #0AE29F;
        filter: drop-shadow(0 20px 40px rgba(10, 226, 159, 0.2));
        border-radius: 16px;

        .info-button-text {
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
          margin: 0 10px;
        }
      }

      .info-video {
        position: absolute;
        top: 155px;
        right: 0;
      }
    }
  }

  .main-page-level-5 {
    position: relative;
    height: 1024px;
    background: linear-gradient(136.35deg, #2C1D7A -16.03%, #1E1647 75.59%);

    .benefits {
      position: absolute;
      left: 140px;
      top: 140px;

      .benefits-stroke {
        width: 2px;
        height: 17px;
        background: #FFFFFF;
      }

      .benefits-title {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 176.4%;
        color: #FFFFFF;
        margin-top: -13px;
      }
    }

    .request-response-boxes {
      position: absolute;
      top: 257px;

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
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 160%;
        color: #FFFFFF;
        margin-left: 40px;
        margin-top: 104px;
      }

      .active-box-title {
        color: #0AE29F;
        margin-left: 72px;
      }

      .active-box-list {
        width: 655px;
        height: 187px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 170%;
        color: #FFFFFF;
        opacity: 0.8;
        margin-left: 72px;
      }

      .box-contact-button {
        margin-left: 76px;
        margin-bottom: 73px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        position: absolute;
        width: 221px;
        height: 54px;
        background: #0AE29F;
        filter: drop-shadow(0 20px 40px rgba(10, 226, 159, 0.2));
        border-radius: 16px;

        .box-button-text {
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
          margin: 0 10px;
        }
      }
    }
  }
}

</style>