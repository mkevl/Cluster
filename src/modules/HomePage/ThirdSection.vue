<template>
  <div class="main-page-third-section">
    <spinner :show="loading"/>
    <span class="provider-stroke"/>
    <p class="provider-title">სადაზღვეო კომპანიები</p>
    <div class="row" v-if="localProviders.length">
      <div class="col-lg-6 col-sm-12 provider-container">
        <!--<img v-if="isScrolled" class="provider-top-scroll" src="/assets/scroll_vector.svg" alt=""
               @click="scrollUp()"/>-->
        <ul class="providers-list" ref="list-scroll" :style="getProviderScrollStyle">
          <li v-for="(item, index) in localProviders" :key="index" class="providers-list-item"
              :class="{'active-provider-item': activeProvider.uuid === item.uuid}" @click="setActiveProvider(item)">
            <img class="provider-image" :src="`${computeBaseUrl}${item.provider_image_url}`"
                 alt="">

          </li>
        </ul>
        <img v-if="providers.length > 5" class="provider-scroll" src="/assets/scroll_vector.svg" alt=""
             @click="scrollDown()">
      </div>
      <div v-if="Object.keys(activeProvider).length" class="col-lg-6 col-sm-12 provider-info">
        <!--        <img class="provider-logo"-->
        <!--             :src="`${computedBaseUrl}${activeProvider.provider_logo_url}`" alt=""/>-->
        <h1 class="provider-info-title">{{ activeProvider.name }}</h1>
        <p class="provider-info-description">{{ activeProvider.description }}</p>
        <div class="contact-container">
          <div v-if="activeProvider.phone" class="d-flex">
            <object class="contact-icon" data="/assets/providers/call_icon.svg" type="image/svg+xml"/>
            <a class="provider-info-contact" :href="`tel:${activeProvider.phone}`">{{ activeProvider.phone }}</a>
          </div>
          <div v-if="activeProvider.site" class="d-flex">
            <object class="contact-icon" data="/assets/providers/browser_icon.svg" type="image/svg+xml"/>
            <a class="provider-info-contact" :href="activeProvider.site" target="_blank">{{ activeProvider.site }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import {createNamespacedHelpers} from "vuex";
import Spinner from "../../core/components/spinner";

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "ThirdSection",
  props: {
    baseUrl: String
  },
  components: {Spinner},
  data() {
    return {
      loading: false,
      activeProvider: {},
      windowWidth: window.innerWidth,
      isScrolled: false,
      localProviders: [],
    }
  },
  computed: {
    ...mapState({
      providers: state => state.providers,
    }),
    getProviderScrollStyle() {
      return this.windowWidth <= 992 || this.isScrolled ? {} : {paddingTop: '33px'}
    },
    computeBaseUrl() {
      return 'https://drive.google.com/uc?export=view&id='
      /*const len = this.baseUrl.length
      if (this.baseUrl[len - 1] === '/') {
        return this.baseUrl.substring(0, this.baseUrl.length - 1);
      }
      return this.baseUrl*/
    },
  },
  methods: {
    ...mapActions(['getAllProvider']),
    setActiveProvider(item) {
      this.localProviders.map(list => {
        if (list.uuid === item.uuid) {
          this.activeProvider = {...list}
        }
        return list
      })
    },
    scrollDown() {
      this.$refs["list-scroll"].scrollTop += 85
      this.isScrolled = !!this.$refs["list-scroll"].scrollTop
    },
    scrollUp() {
      this.$refs["list-scroll"].scrollTop -= 150
    }
  },
  async mounted() {
    this.loading = true;
    await this.getAllProvider()
    this.localProviders = _.cloneDeep(this.providers)
    this.activeProvider = this.localProviders.find(p => p.is_active)
    this.loading = false;

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

.provider-scroll {
  margin-left: 49px;
  cursor: pointer;
  padding: 0 !important;
}

.provider-top-scroll {
  margin-left: 49px;
  margin-top: 33px;
  cursor: pointer;
  padding: 0 !important;
  transform: rotateX(180deg);
}

.providers-list {
  padding: 0 0 0 16px;
  margin: 0;
  width: 100%;
  max-height: 670px;
  overflow: hidden;
  align-items: center;
}

.providers-list-item {
  //opacity: 0.5%;
  cursor: pointer;
  mix-blend-mode: luminosity;
  padding-top: 16px;
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
}

.provider-image {
  max-width: 180px;
  max-height: 120px;
  padding: 0 !important;
}

.provider-logo {
  width: 63px;
  height: 36px;
}

.active-provider-item {
  mix-blend-mode: unset;
}

.provider-info {
  margin-top: 81px;
}

.provider-info-title {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 160%;
  color: #212529;
  //margin: 13px 0 0 11px;
  margin: 0 0 0 11px;
  height: 46px !important;
  width: 610px;
}

.provider-info-description {
  width: auto;
  min-height: 187px;
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

@media all and (max-width: 992px) {
  .main-page-third-section {
    padding: 72px 0 0 24px;
    min-height: 800px;
  }

  .provider-title {
    height: 37px;
    font-size: 19px;
    width: 479px;
    margin-top: -24px;
  }

  .provider-scroll {
    display: none;
  }

  .provider-top-scroll {
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
    overflow: auto;
    max-height: unset;

    :last-child {
      margin-right: 0;
    }
  }

  .providers-list-item {
    margin: 0 38px 0 0;
    padding: 0 !important;
    //display: block;
    width: 120px;
    height: 120px;
  }

  .provider-image {
    max-width: 120px;
    max-height: 120px;
    padding: 33px 0 0 !important;
  }

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
    min-height: 189px;
    font-size: 16px;
    margin-top: 25px;
    margin-right: 25px;
  }

  .contact-container {
    margin: 39px 0 0 19px;
  }

  .provider-info-contact {
    font-size: 14px;
  }
}

@media all and (max-width: 320px) {
  .main-page-third-section {
    min-height: 1150px;
  }

  .provider-title {
    font-size: 14px;
    margin-top: -22px;
  }

  .provider-info-title {
    width: 355px;
    font-size: 24px;
    margin-top: 25px;
  }
}
</style>