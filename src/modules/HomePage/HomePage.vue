<template>
  <div class="main-page" :style="getPageHeight">
    <div class="main-page-level-1">
      <object data="assets/klaster_logo.svg" type="image/svg+xml"/>
      <div class="head-content">
        <h1 class="main-title">შეამცირე შენი ბიზნესის ხარჯი</h1>
        <p class="main-description">პლატფორმა საერთო ინტერესების გარშემო გაერთიანებისთვის</p>
      </div>
      <div class="insurance">
        <p class="insurance-title">აირჩიე დაზღვევა</p>
        <div class="d-flex justify-content-center insurance-buttons">
          <div class="d-flex align-items-center" :class="{'active-rectangle': isActive.life}">
            <b-button class="insurance-option-button" :class="{'active-button': isActive.life}" size="sm"
                      @click="onSelectButtonClick('life')">
              <span class="button-text" :class="{'active-text': isActive.life}">სიცოცხლის</span>
            </b-button>
          </div>
          <div class="d-flex align-items-center ml-4" :class="{'active-rectangle': isActive.health}">
            <b-button class="insurance-option-button" :class="{'active-button': isActive.health}" size="sm"
                      @click="onSelectButtonClick('health')">
              <span class="button-text" :class="{'active-text': isActive.health}">ჯანმრთელობის</span>
            </b-button>
          </div>
        </div>
      </div>
      <div class="insurance-package">
        <p class="package-text">აირჩიე პაკეტი</p>
        <b-form-radio-group v-model="checked" class="mt-5">
          <b-form-radio v-for="item in options" class="ml-4" :key="item.value" :value="item.value">
            <p class="mb-0 ml-3 radio-button-label" :class="{'active-radio-button': checked === item.value}">
              {{ item.text }}
            </p>
          </b-form-radio>
        </b-form-radio-group>
      </div>
      <div class="d-flex justify-content-center results">
        <b-button class="results-button" @click="onResultsCLick">
          <span class="results-text">შედეგების ნახვა</span>
        </b-button>
      </div>
      <div class="d-flex contact">
        <span class="contact-text">დაგვიკავშირდი</span>
        <span class="connect-stroke"/>
        <div class="d-flex contact-icons float-right">
          <a class="icons" :href="`mailto:${EMAIL}`">
            <img src="/assets/icons/email_icon.svg" alt="">
          </a>
          <a class="icons ml-5" :href="`tel:${NUMBER}`">
            <img src="/assets/icons/phone_icon.svg" alt="">
          </a>
          <a class="icons ml-5" :href="`https://wa.me/${NUMBER}`" target='_blank'>
            <img src="/assets/icons/whatsapp_icon.svg" alt="">
          </a>
          <a class="icons ml-5" :href="`https://www.m.me/${MESSENGER_URL}`" target='_blank'>
            <img class="messenger-icon" src="/assets/icons/messenger_icon.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div v-if="showResultsModal" class="results-modal">
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
        <div class="d-flex month-calculation-box">
          <img src="/assets/tmp_time_calculation.png" alt="">
          <span class="box-description">
           Cluster is made to optimize your expenses,
           whether you are a physical entity or running a business of any size.
           Paying less in stuff and services
         </span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="main-page-level-2">
        <div class="d-flex cluster">
          <span class="cluster-stroke"/>
          <p class="cluster-title ml-3 mb-0">როგორ მუშაობს კლასტერი?</p>
        </div>
        <div class="d-flex cluster-list">
          <div class="wrap-lists">
            <object data="assets/list_backgraund_1.svg" type="image/svg+xml"/>
            <span class="list-numbers">1</span>
            <p class="list-texts">მოგვაწოდე ინფორმაცია შენი საჭიროების შესახებ</p>
          </div>
          <div class="wrap-lists ml-4">
            <object data="assets/list_backgraund_2.svg" type="image/svg+xml"/>
            <span class="list-numbers">2</span>
            <p class="list-texts">მოხდება მსგავსი საჭიროებების კონსოლიდაცია</p>
          </div>
          <div class="wrap-lists ml-4">
            <object data="assets/list_backgraund_3.svg" type="image/svg+xml"/>
            <span class="list-numbers">3</span>
            <p class="list-texts">მიიღე პროდუქტი ან სერვისი საუკეთესო ფასად</p>
          </div>
        </div>
      </div>
      <div class="main-page-level-3">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      MESSENGER_URL: 'process.env.MESSENGER_URL',
      NUMBER: 'process.env.NUMBER',
      EMAIL: 'process.env.EMAIL',
      options: [
        {value: 'min', text: 'მინიმალური'},
        {value: 'basic', text: 'საბაზისო'},
        {value: 'improved', text: 'გაუმჯობესებული'},
      ],
      checked: 'min',
      isActive: {
        life: true,
        health: false,
      },
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
    getPageHeight() {
      return this.showResultsModal ? {} : {height: '6932px'}
    }
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
    onResultsCLick() {
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

      .box-description {
        position: absolute;
        width: 311px;
        height: 104px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #D7C9FE;
        margin-left: 10px;
      }
    }
  }
}

.main-page {

  .main-page-level-1 {
    position: absolute;
    top: 57px;
    text-align: center;
    width: 100%;

    .klaster-logo {
      width: 172px;
      height: 85px;
    }

    .head-content {
      margin-top: 6rem;
    }

    .main-title {
      font-family: Helvetica;
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      line-height: 83px;
      text-align: center;
      color: #FFFFFF;
      margin: 0;
    }

    .main-description {
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 160%;
      text-align: center;
      color: #FFFFFF;
      margin: 20px 0 0 0;
    }

    .insurance {
      margin-top: 68px;

      .insurance-title {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 0;
      }

      .insurance-buttons {
        margin-top: 30px;

        .insurance-option-button {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 11px 36px;
          background: rgba(30, 22, 71, 0.16);
          backdrop-filter: blur(4px);
          border-radius: 50px;
          border: unset;

          .button-text {
            position: static;
            height: 28px;
            font-family: Helvetica;
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
        }

        .insurance-option-button:focus {
          background: rgba(30, 22, 71, 0.3);
          box-shadow: unset;
        }

        .active-rectangle {
          height: 66px;
          border: 1px solid #0AE29F;
          box-sizing: border-box;
          border-radius: 59px;
          padding: 0 10px;
        }

        .active-button {
          background: rgba(30, 22, 71, 0.3) !important;
        }

        .active-text {
          font-weight: bold !important;
          color: #FFFFFF !important;
        }
      }
    }

    .insurance-package {
      margin-top: 48px;

      .package-text {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 0;
      }

      .radio-button-label {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 137.9%;
        color: #FFFFFF;
        margin-right: 15px;
        opacity: 0.7;
      }

      .active-radio-button {
        font-weight: bold !important;
        opacity: unset !important;
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
        left: -16px;
        background: #0AE29F;
        border-radius: 50px;
      }
    }

    .results {
      margin-top: 5rem;

      .results-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 18px 40px;
        position: static;
        width: 229px;
        height: 54px;
        background: #0AE29F;
        border-radius: 16px;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0 16px;
        border: unset;
      }

      .results-button:focus {
        background: #0AE29F;
        box-shadow: unset;
      }

      .results-text {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        text-transform: uppercase;
        color: #045C41;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0 10px;
      }
    }

    .contact {
      margin-top: 5rem;

      .contact-text {
        position: absolute;
        left: 116px;
        width: 137px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: 0.12em;
        color: #FFFFFF;
        opacity: 0.8;
      }

      .connect-stroke {
        position: absolute;
        width: 755px;
        left: 283px;
        border: 0.5px solid #FFFFFF;
        margin-top: 14px;
      }

      .contact-icons {
        position: absolute;
        left: 1070px;

        .icons {
          width: 34px;
          height: 34px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          border-radius: 50px;

          .messenger-icon {
            position: absolute;
            top: 8px;
            right: 7px;
            opacity: 0.8;
          }
        }
      }
    }
  }

  .main-page-level-2 {
    position: relative;
    margin-top: 8rem;
    left: 116px;
    height: 1024px;

    .cluster {

      .cluster-stroke {
        width: 2px;
        height: 17px;
        background: #6335E9;
        border: 1px solid #6335E9;
        box-sizing: border-box;
      }

      .cluster-title {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 176.4%;
        color: #1E1647;
        margin-top: -13px;
      }
    }

    .cluster-list {
      margin-top: 5rem;

      .wrap-lists {
        position: relative;
        margin-top: 1rem;

        .list-numbers {
          position: absolute;
          left: 40px;
          top: 109px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 900;
          font-size: 40px;
          line-height: 49px;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .list-texts {
          position: absolute;
          left: 40px;
          top: 200px;
          font-family: Helvetica;
          font-style: normal;
          font-weight: normal;
          font-size: 32px;
          line-height: 180%;
          color: #FFFFFF;
          margin: 0;
        }
      }
    }
  }

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