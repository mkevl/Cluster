<template>
  <div class="main-page-third-section">
    <span class="provider-stroke"/>
    <p class="provider-title">პარტნიორი სადაზღვეო კომპანიები</p>
    <div :class="getProviderClass">
      <div class="provider-container">
        <ul class="providers-list">
          <li v-for="(item, index) in providers" :key="index" class="providers-list-item"
              :class="{'active-provider-item': item.isActive}" @click="setActiveProvider(item)">
            <img class="provider-image" :src="item.img_url" alt=""/>
          </li>
        </ul>
        <img class="provider-scroll" src="/assets/scroll_vector.svg" alt=""/>
      </div>
      <div class="provider-info">
        <img :src="activeProvider.logo_url" alt=""/>
        <h1 class="provider-info-title">{{ activeProvider.title }}</h1>
        <p class="provider-info-description">{{ activeProvider.description }}</p>
        <div class="contact-container">
          <div v-if="activeProvider.tel" class="d-flex">
            <object class="contact-icon" data="/assets/providers/call_icon.svg" type="image/svg+xml"/>
            <a class="provider-info-contact" :href="`tel:${activeProvider.tel}`">{{ activeProvider.tel }}</a>
          </div>
          <div v-if="activeProvider.link" class="d-flex">
            <object class="contact-icon" data="/assets/providers/browser_icon.svg" type="image/svg+xml"/>
            <a class="provider-info-contact" :href="activeProvider.link" target="_blank">{{ activeProvider.link }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdSection",
  data() {
    return {
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
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    getProviderClass() {
      return this.windowWidth <= 480 ? '' : 'd-flex justify-content-between'
    },
  },
  methods: {
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
  },
  mounted() {
    this.activeProvider = {...this.providers[0]}
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

/deep/ ul {
  list-style-type: none;
}

.main-page-third-section {
  position: relative;
  height: 1024px;
  padding: 140px 116px 0 116px;
}

.provider-stroke {
  width: 2px;
  height: 17px;
  background: #6335E9;
  border: 1px solid #6335E9;
  box-sizing: border-box;
}

.provider-title {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  height: 77px;
  font-size: 24px;
  line-height: 176.4%;
  color: #1E1647;
  width: 494px;
  margin: -28px 0 0 13px;
}

@media all and (max-width: 480px) {
  .main-page-third-section {
    padding: 72px 0 0 24px;
    height: 1024px;
  }

  .provider-title {
    height: 37px;
    font-size: 19px;
    width: 479px;
    margin-top: -24px;
  }
}

.provider-scroll {
  margin-left: 49px;
  cursor: pointer;
  padding: 0 !important;
}

.providers-list {
  padding: 0 0 0 16px;
  margin: 0;
  overflow: auto;
  width: 100%;

  :first-child {
    padding-top: 33px;
  }
}

.providers-list-item {
  //opacity: 0.5%;
  cursor: pointer;
  mix-blend-mode: luminosity;
  padding-top: 16px;
}

.provider-image {
  padding: 0 !important;
}

.active-provider-item {
  mix-blend-mode: unset;
}

@media all and (max-width: 480px) {
  .provider-scroll {
    display: none;
  }

  .provider-container {
    width: 100%;
    height: 100%;
  }

  .providers-list {
    padding-top: 20px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  .providers-list-item {
    margin: 0 38px 0 0;
    padding: 0 !important;
    display: block;
  }

  .provider-image {
    width: 120px;
    height: 120px;
    padding: 33px 0 0 !important;
  }
}

.provider-info {
  margin-left: 325px;
  margin-top: 81px;
}

.provider-info-title {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 160%;
  color: #212529;
  margin: 13px 0 0 11px;
  height: 46px !important;
  width: 610px;
}

.provider-info-description {
  width: 655px;
  height: 187px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #212529;
  margin: 37px 0 0 11px;
}

.contact-container {
  width: 296px;
  height: 82px;
  margin: 36px 0 0 15px;
}

.contact-icon {
  width: 18.24px;
  height: 19px;
}

.provider-info-contact {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #606870;
  text-decoration: none;
  width: 169px;
  height: 34px;
  margin-left: 12.76px;
  margin-top: -2px;
}

@media all and (max-width: 480px) {
  .provider-info {
    margin-left: 4px;
    margin-top: 24px;
  }

  .provider-info-title {
    width: 355px;
    font-size: 32px;
    margin-top: 25px;
  }

  .provider-info-description {
    width: 335px;
    height: 189px;
    font-size: 16px;
    margin-top: 25px;
  }

  .contact-container {
    margin: 39px 0 0 19px;
  }

  .provider-info-contact {
    font-size: 14px;
  }
}
</style>