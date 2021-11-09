<template>
  <div class="main-page-second-section">
    <span class="cluster-stroke"/>
    <p class="cluster-title">როგორ მუშაობს კლასტერი?</p>
    <div class="d-flex justify-content-between cluster-list">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <object class="cluster-card" data="assets/list_backgraund_1.svg" type="image/svg+xml"/>
            <span class="list-numbers">1</span>
            <p class="list-texts">მოგვაწოდე ინფორმაცია <br/><b>შენი საჭიროების შესახებ</b></p>
          </div>
          <div class="flip-card-back">
            <span class="list-back-numbers">1</span>
            <p class="list-back-texts">შენთვის მოსახერხებელი გზით მოგვაწოდე ინფორმაცია სასურველი პროდუქტის და საჭირო
              ოდენობის შესახებ</p>
            <contact-button class="contact-button"/>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <object class="cluster-card" data="assets/list_backgraund_2.svg" type="image/svg+xml"/>
            <span class="list-numbers">2</span>
            <p class="list-texts">მოხდება მსგავსი საჭიროებების <br/> <b>კონსოლიდაცია</b></p>
          </div>
          <div class="flip-card-back">
            <span class="list-back-numbers">2</span>
            <p class="list-back-texts">ჩვენ დავამუშავებთ მოწოდებულ ინფორმაციას, თქვენს მოთხოვნას გავაერთიანებთ სხვა
              ანალოგიურთან და მოვიძიებთ შესაბამისი პროდუქტის ან სერვისის </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <object class="cluster-card" data="assets/list_backgraund_3.svg" type="image/svg+xml"/>
            <span class="list-numbers">3</span>
            <p class="list-texts">მიიღე პროდუქტი ან სერვისი <br/><b>საუკეთესო ფასად</b></p>
          </div>
          <div class="flip-card-back">
            <span class="list-back-numbers">3</span>
            <p class="list-back-texts">კონსოლიდაციის ხარჯზე, მიმწოდებლები კლასტერის მონაწილე კომპანიებს შესთავაზებენ
              მაქსიმალურად დაბალ ფასს</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactButton from "./ContactButton";

export default {
  name: "SecondSection",
  components: {ContactButton}
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
  width: 494px;
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
    width: 479px;
    margin-top: -24px;
  }
}

.cluster-list {
  margin-top: 40px;
}

.flip-card {
  width: 376px;
  height: 564px;
  cursor: pointer;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(-180deg);
}

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
</style>