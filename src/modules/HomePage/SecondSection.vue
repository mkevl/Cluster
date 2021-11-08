<template>
  <div class="main-page-second-section">
    <span class="cluster-stroke"/>
    <p class="cluster-title">როგორ მუშაობს კლასტერი?</p>
    <div class="row cluster-list">
      <div class="col-4 wrap-lists">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <object class="cluster-front-card" data="assets/list_backgraund_1.svg" type="image/svg+xml"/>
              <span class="list-numbers">1</span>
              <p class="list-texts">მოგვაწოდე ინფორმაცია შენი საჭიროების შესახებ</p>
            </div>
            <div class="flip-card-back">
              <!--        <span class="list-numbers">1</span>-->
              <!--        <p class="list-texts">მოგვაწოდე ინფორმაცია შენი საჭიროების შესახებ</p>-->
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 wrap-lists">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <object class="cluster-front-card" data="assets/list_backgraund_2.svg" type="image/svg+xml"/>
              <!--        <span class="list-numbers">2</span>-->
              <!--        <p class="list-texts">მოხდება მსგავსი საჭიროებების კონსოლიდაცია</p>-->
            </div>
            <div class="flip-card-back">
              <!--        <span class="list-numbers">1</span>-->
              <!--        <p class="list-texts">მოგვაწოდე ინფორმაცია შენი საჭიროების შესახებ</p>-->
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 wrap-lists">
        <object class="cluster-front-card" data="assets/list_backgraund_3.svg" type="image/svg+xml"/>
        <!--        <span class="list-numbers">3</span>-->
        <!--        <p class="list-texts">მიიღე პროდუქტი ან სერვისი საუკეთესო ფასად</p>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSection"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

.main-page-second-section {
  position: relative;
  margin: 140px 116px 0 116px;
  height: 1024px;
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
  margin: -28px 0 0 13px
}

@media all and (max-width: 480px) {
  .main-page-second-section {
    margin-top: 110px;
    margin-left: 42px;
    height: 593px;
  }

  .cluster-title {
    height: 37px;
    font-size: 20px;
  }
}

.cluster-list {
  margin-top: 40px;
}

.wrap-lists {
  position: relative;
}

.cluster-front-card {
  width: 100%;
  height: 100%;
}

.flip-card {
  width: 100%;
  height: 100%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
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

.flip-card:hover .flip-card-inner {
  transform: rotateY(-180deg);
}

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
</style>