<template>
  <div class="main-page">
    <img src="/assets/klaster_logo.svg" alt="" class="klaster-logo">
    <div class="head-content">
      <h1 class="main-title">შეამცირე შენი ბიზნესის ხარჯი</h1>
      <p class="main-description">პლატფორმა საერთო ინტერესების გარშემო გაერთიანებისთვის</p>
    </div>
    <div class="insurance">
      <p class="insurance-title">აირჩიე დაზღვევა</p>
      <div class="d-flex justify-content-center insurance-buttons">
        <div class="d-flex align-items-center" :class="{'active-rectangle': isActive.life}">
          <b-button class="insurance-option-button" :class="{'active-button': isActive.life}" size="sm">
            <span class="button-text" :class="{'active-text': isActive.life}">სიცოცხლის</span>
          </b-button>
        </div>
        <div class="d-flex align-items-center ml-5" :class="{'active-rectangle': isActive.health}">
          <b-button class="insurance-option-button" :class="{'active-button': isActive.health}" size="sm">
            <span class="button-text" :class="{'active-text': isActive.health}">ჯანმრთელობის</span>
          </b-button>
        </div>
      </div>
    </div>
    <!--<span class="choose-packet">აირჩიე პაკეტი</span>
    <b-form-radio-group :options="options">
      <template v-slot:default>
        <span></span>
      </template>
    </b-form-radio-group>-->
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      options: [
        {value: 'min', text: 'მინიმალური'},
        {value: 'basic', text: 'საბაზისო'},
        {value: 'improved', text: 'გაუმჯობესებული'},
      ],
      isActive: {
        life: true,
        health: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>

.main-page {
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
}

//  .choose-packet {
//    position: absolute;
//    width: 113px;
//    height: 16px;
//    left: 663px;
//    top: 628px;
//
//    font-family: Helvetica;
//    font-style: normal;
//    font-weight: bold;
//    font-size: 14px;
//    line-height: 16px;
//    /* identical to box height */
//
//    text-align: center;
//    text-transform: uppercase;
//
//    /* White */
//
//    color: #FFFFFF;
//  }
//
//  /deep/ .custom-control-label {
//    position: absolute;
//    width: 93px;
//    height: 28px;
//    left: 694px;
//    top: 670px;
//
//    font-family: Helvetica;
//    font-style: normal;
//    font-weight: normal;
//    font-size: 20px;
//    line-height: 137.9%;
//    /* identical to box height, or 28px */
//
//
//    color: #FFFFFF;
//
//    opacity: 0.7;
//  }

/*@media screen and (max-width: 1000px) {
  .home-page {
    overflow: hidden !important;

    .background-image {
      width: 100%;
    }

    .main-title {
      font-size: 40px;
      line-height: 64px;
    }

    .klaster-logo {
      position: absolute;
      width: 107.25px;
      height: 53px;
      left: 153px;
      top: 58px;
    }
  }
}*/
</style>