<template>
  <div class="main-page-sixth-section">
    <span class="feedback-stroke"/>
    <p class="feedback-title">უკუკავშირი</p>
    <ul class="carousel-list" ref="list-carousel">
      <li v-for="(item, index) in data" :key="item.uuid">
        <div class="carousel-list-item-container" :id="`carousel-list-item-${index}`">
          <img class="carousel-logo" :src="item.logo_url" alt="">
          <span class="carousel-stroke"/>
          <object class="carousel-top-quote" data="/assets/top_quote.svg" type="image/svg+xml"/>
          <object class="carousel-bottom-quote" data="/assets/bottom_quote.svg" type="image/svg+xml"/>
          <p class="feedback-text">{{ item.feedback }}</p>
          <p class="feedback-author">-{{ item.author }}</p>
        </div>
      </li>
    </ul>
    <div class="carousel-next-slider" @click="onCarouselNextClick()">
      <img class="carousel-next-button" src="/assets/next_button.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SixthSection",
  data() {
    return {
      data: [
        {
          uuid: '1',
          logo_url: '/assets/tweeter_logo.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '2',
          logo_url: '/assets/providers/tbc_logo_2.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '3',
          logo_url: '/assets/tweeter_logo.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '4',
          logo_url: '/assets/providers/tbc_logo_2.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '5',
          logo_url: '/assets/tweeter_logo.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '6',
          logo_url: '/assets/providers/tbc_logo_2.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '7',
          logo_url: '/assets/tweeter_logo.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
        {
          uuid: '8',
          logo_url: '/assets/providers/tbc_logo_2.png',
          feedback: 'პრიორიტეტულია მდგრადი მასალების გამოყენება. კოლექციების შექმნისას, გარდა ეკოლოგიური ფაქტორისა',
          author: 'ANa Gloveli'
        },
      ],
      listWidth: 0,
    }
  },
  methods: {
    computeLiWidth() {
      this.data.forEach((item, index) => {
        const listItem = document.getElementById(`carousel-list-item-${index}`)
        console.log(listItem.parentElement.parentElement.offsetWidth)
        const width = (listItem.parentElement.parentElement.offsetWidth * 93) / 100
        listItem.style.width = `${width}px`
      })
    },
    onCarouselNextClick() {
      console.log(this.listWidth)
      this.$refs['list-carousel'].scrollLeft += this.listWidth
    }
  },
  mounted() {
    this.computeLiWidth();
    window.addEventListener('resize', this.computeLiWidth)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

.main-page-sixth-section {
  position: relative;
  height: 897px;
  width: 100%;
  padding: 140px 0 0 116px;
}

@media all and (max-width: 480px) {
  .main-page-sixth-section {
    height: 902px;
    padding: 72px 0 0 27px;
  }
}

.feedback-stroke {
  width: 2px;
  height: 17px;
  background: #6335E9;
  border: 1px solid #6335E9;
  box-sizing: border-box;
}

.feedback-title {
  width: 479px;
  height: 77px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 176.4%;
  color: #1E1647;
  margin: -28px 0 0 13px;
}

@media all and (max-width: 480px) {
  .feedback-title {
    width: 373px;
    height: 37px;
    font-size: 20px;
    line-height: 176.4%;
  }
}

.carousel-list {
  margin: 24px 20px 0 192px;
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 0;
  height: 100%;

  > li {
    list-style-type: none;
    display: inline-block;
    padding: 0;
    position: relative;
    width: 100%;
  }
}

.carousel-list-item-container {
  height: 100%;
}

.carousel-logo {
  margin: 116px 0 0 0;
  width: 86px;
  height: 86px;
}

.carousel-stroke {
  position: absolute;
  width: 0;
  height: 351px;
  border: 1px solid #DEE2E6;
  margin: 109px 0 0 56px;
}

.carousel-top-quote {
  margin-left: 96px;
}

.carousel-bottom-quote {
  position: absolute;
  margin-left: 493px;
  margin-top: 380px;
}

.feedback-text {
  position: absolute;
  max-width: 592px;
  height: 134px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 170%;
  color: #212529;
  margin: 0 0 0 237px
}

.feedback-author {
  position: absolute;
  width: 279px;
  height: 59px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 166%;
  color: #212529;
  margin: 149px 0 0 237px
}

@media all and (max-width: 480px) {
  .carousel-logo {
    margin: 104px 0 0 13px;
  }

  .carousel-stroke {
    display: none;
  }

  .carousel-top-quote {
    position: absolute;
    margin-top: 202px;
    margin-left: -145px;
  }

  .carousel-bottom-quote {
    margin-top: 489px;
    margin-left: 175px;
  }
}

.carousel-next-slider {
  position: absolute;
  width: 308px;
  height: 495px;
  margin-top: 150px;
  top: 0;
  right: -93px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);
  cursor: pointer;
}

.carousel-next-button {
  position: absolute;
  width: 50px;
  height: 39.5px;
  left: 124px;
  top: 315px;
}
</style>