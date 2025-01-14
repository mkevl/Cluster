<template>
  <div class="main-page-second-section">
    <span class="cluster-stroke"/>
    <p class="cluster-title">როგორ მუშაობს კლასტერი?</p>
    <ul class="cluster-list">
      <li v-for="item in cardItems" :key="item.uuid" class="mr-5" @mouseover="onMouseMove(item.uuid, true)"
          @mouseleave="onMouseMove(item.uuid)" @click="onMouseClick($event, item.uuid)">
        <div class="flip-card">
          <div class="flip-card-inner" :id="`flip-card-inner-${item.uuid}`">
            <div class="flip-card-front">
              <object class="cluster-card" :data="item.imageUrl" type="image/svg+xml"/>
              <span class="list-numbers">{{ item.uuid }}</span>
              <p class="list-texts" v-html="item.frontText"/>
            </div>
            <div class="flip-card-back">
              <span class="list-back-numbers">{{ item.uuid }}</span>
              <p class="list-back-texts">{{ item.backText }}</p>
              <contact-button v-if="item.hasContactButton" class="contact-button" :text-style="textStyle"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ContactButton from "./ContactButton";

export default {
  name: "SecondSection",
  components: {ContactButton},
  data() {
    return {
      windowWidth: window.innerWidth,
      textStyle: {color: '#045C41'},
      isFirstClick: true,
    }
  },
  computed: {
    getFirstCard() {
      return this.isSmallScreen ? 'assets/list_backgraund_md_1.svg' : 'assets/list_backgraund_1.svg'
    },
    getSecondCard() {
      return this.isSmallScreen ? 'assets/list_backgraund_md_2.svg' : 'assets/list_backgraund_2.svg'
    },
    getThirdCard() {
      return this.isSmallScreen ? 'assets/list_backgraund_md_3.svg' : 'assets/list_backgraund_3.svg'
    },
    cardItems() {
      return [
        {
          uuid: '1',
          frontText: 'მოგვაწოდე ინფორმაცია <br/><b>შენი საჭიროების შესახებ</b>',
          backText: 'შენთვის მოსახერხებელი გზით მოგვაწოდე ინფორმაცია სასურველი პროდუქტის და საჭირო ოდენობის შესახებ',
          imageUrl: this.getFirstCard,
          hasContactButton: true,
        },
        {
          uuid: '2',
          frontText: 'მოხდება მსგავსი საჭიროებების <br/><b>კონსოლიდაცია</b>',
          backText: 'ჩვენ დავამუშავებთ მოწოდებულ ინფორმაციას, თქვენს მოთხოვნას გავაერთიანებთ სხვა ანალოგიურთან და მოვიძიებთ შესაბამისი პროდუქტის ან სერვისის მიმწოდებლებს.',
          imageUrl: this.getSecondCard,
          hasContactButton: false,
        },
        {
          uuid: '3',
          frontText: 'მიიღე პროდუქტი ან სერვისი <br/><b>საუკეთესო ფასად</b>',
          backText: 'კონსოლიდაციის ხარჯზე, მიმწოდებლები კლასტერის მონაწილე კომპანიებს შესთავაზებენ მაქსიმალურად დაბალ ფასს',
          imageUrl: this.getThirdCard,
          hasContactButton: false,
        }
      ]
    },
    isSmallScreen() {
      return this.windowWidth <= 992
    },
  },
  methods: {
    onMouseClick(e, uuid) {
      if (this.isSmallScreen && e.target.nodeName !== 'BUTTON') {
        const flipCardInner = document.getElementById(`flip-card-inner-${uuid}`)
        if (flipCardInner) {
          if (this.isFirstClick) {
            flipCardInner.style.transform = 'rotateY(-180deg)';
            this.isFirstClick = false
          } else {
            flipCardInner.style.transform = '';
            this.isFirstClick = true
          }
        }
      }
    },
    onMouseMove(uuid, isMouseOver = false) {
      const flipCardInner = document.getElementById(`flip-card-inner-${uuid}`)
      if (flipCardInner) {
        if (isMouseOver) {
          flipCardInner.style.transform = 'rotateY(-180deg)';
        } else {
          flipCardInner.style.transform = '';
        }
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

/deep/ ul {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: calc(100% - 116px);
  margin: 0;
  padding: 0;

  > li {
    display: block;
    list-style-type: none;
  }
}

.main-page-second-section {
  position: relative;
  padding: 140px 116px 0 116px;
  height: 824px;
}

.cluster-stroke {
  width: 2px;
  height: 17px;
  background: #6335E9;
  border: 1px solid #6335E9;
  box-sizing: border-box;
}

.cluster-title {
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

.cluster-list {
  margin-top: 40px;
}

.flip-card {
  width: 376px;
  height: 564px;
  cursor: pointer;
}

/*.flip-card:hover .flip-card-inner {
  transform: rotateY(-180deg);
}*/

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.75s;
  transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  background: #F8F9FA;
  border-radius: 24px;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.06));
  transform: rotateY(-180deg);
}

.list-numbers {
  position: absolute;
  width: 17px;
  height: 49px;
  left: 40px;
  top: 99px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 49px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.list-back-numbers {
  position: absolute;
  width: 17px;
  height: 49px;
  left: 40px;
  top: 99px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 49px;
  text-transform: uppercase;
  color: #ADB5BD;
}

.list-texts {
  position: absolute;
  left: 40px;
  top: 161px;
  margin: 40px 0 0 0;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 180%;
  color: #FFFFFF;
  width: 290px;
  height: 158px;
}

.list-back-texts {
  position: absolute;
  width: 305px;
  height: 187px;
  left: 40px;
  top: 161px;
  margin: 40px 0 0 0;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 180%;
  color: #495057;
}

.contact-button {
  position: absolute;
  left: 30px;
  top: 431px;
}

@media all and (max-width: 1280px) {
  .main-page-second-section {
    padding-left: 30px;
  }

  .cluster-title {
    width: calc(100% - 40px);
  }
}

@media all and (max-width: 992px) {
  .main-page-second-section {
    padding: 110px 0 0 24px;
    height: 593px;
    background: #F8F9FA;
  }

  .cluster-title {
    height: 37px;
    font-size: 20px;
    width: 479px;
    margin-top: -24px;
  }

  .cluster-list {
    overflow-x: auto;
    overflow-y: hidden;
    width: calc(100% - 8px);

    > li {
      margin-right: 34px;
    }
  }

  .cluster-list {
    margin-left: 8px;
  }

  .flip-card {
    width: 300px;
    height: 320px;
    margin-right: -5px;
  }

  .list-numbers {
    top: 40px;
    left: 31.91px;
    width: 13.56px;
    height: 27.8px;
    font-size: 32px;
    line-height: 39px;
  }

  .list-back-numbers {
    top: 40px;
    left: 31.91px;
    width: 13.56px;
    height: 27.8px;
    font-size: 32px;
    line-height: 39px;
  }

  .list-texts {
    width: 256.12px;
    height: 89.65px;
    left: 31.91px;
    top: 60px;
    font-size: 24px;
  }

  .list-back-texts {
    width: 256.12px;
    height: 89.65px;
    left: 31.91px;
    top: 60px;
    font-size: 16px;
  }

  .contact-button {
    left: 18px !important;
    top: 242px !important;
  }
}

@media all and (max-width: 320px) {
  .cluster-title {
    font-size: 14px;
    margin-top: -22px;
  }
}
</style>