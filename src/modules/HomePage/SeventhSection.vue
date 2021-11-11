<template>
  <div class="main-page-seventh-section">
    <p class="faq-title">ხშირად დასმული შეკითხვები</p>
    <p class="contact-title">დაგვიკავშირდი</p>
    <ul class="faq-list">
      <li class="" v-for="(item, index) in faqData" :key="index">
        <div class="faq-list-item d-flex justify-content-between" @click="toggleFAQ(item)">
          <p class="faq-list-question">{{ item.question }}</p>
          <img v-if="item.isActive" class="toggle-icon" src="/assets/icons/minus_icon.svg" alt="">
          <img v-else class="toggle-icon" src="/assets/icons/plus_icon.svg" alt="">
        </div>
        <p class="active-question-description" :style="item.style">{{ item.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SeventhSection",
  props: {
    phoneNumber: String,
  },
  data() {
    return {
      faqData: [
        {
          uuid: '1',
          question: 'როგორ დავრეგისტრირდე?',
          answer: 'მომხმარებელს აქვს შესაძლებლობა კლასტერში გაწევრიანებისას განაცხადოს რომ ნებისმიერი შედეგის შემთხვევაში, არ მიიღებს პროცესში მონაწილე რომელიმე მიმწოდებლის პროდუქტს. მთავარია, ამის შესახებ კლასტერის მენეჯერს ეცნობოს კომპანიის რეგისტრაციისას',
          isActive: false,
          style: {display: 'none'}
        },
        {
          uuid: '2',
          question: 'როგორ ავირიდო არასასურველი მომწოდებელი?',
          answer: 'მომხმარებელს აქვს შესაძლებლობა კლასტერში გაწევრიანებისას განაცხადოს რომ ნებისმიერი შედეგის შემთხვევაში, არ მიიღებს პროცესში მონაწილე რომელიმე მიმწოდებლის პროდუქტს. მთავარია, ამის შესახებ კლასტერის მენეჯერს ეცნობოს კომპანიის რეგისტრაციისას',
          isActive: false,
          style: {display: 'none'}
        },
        {
          uuid: '3',
          question: 'რამდენად უსაფრთხოა კლასტერი?',
          answer: 'მომხმარებელს აქვს შესაძლებლობა კლასტერში გაწევრიანებისას განაცხადოს რომ ნებისმიერი შედეგის შემთხვევაში, არ მიიღებს პროცესში მონაწილე რომელიმე მიმწოდებლის პროდუქტს. მთავარია, ამის შესახებ კლასტერის მენეჯერს ეცნობოს კომპანიის რეგისტრაციისას',
          isActive: false,
          style: {display: 'none'}
        },
      ]
    }
  },
  methods: {
    toggleFAQ(item) {
      this.faqData.map(d => {
        if (d.uuid === item.uuid) {
          d.isActive = !d.isActive
          d.style = d.isActive ? {display: 'block'} : {display: 'none'};
        } else {
          d.isActive = false
          d.style = {display: 'none'}
        }
        return d
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica');

.main-page-seventh-section {
  position: relative;
  width: 100%;
  height: 925px;
  background: linear-gradient(162.38deg, #8B63FF -57.19%, #6335E9 87.95%);
}

.faq-title {
  position: absolute;
  width: 699px;
  height: 54px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #FFFFFF;
  margin: 120px 0 0 114px;
}

.contact-title {
  position: absolute;
  width: 699px;
  height: 54px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #FFFFFF;
  margin: 128px 0 0 1030px;
}

.faq-list {
  position: absolute;
  margin-top: 246px;
  margin-left: 117px;
  padding: 0;
  height: 368px;
  overflow-x: auto;

  > li {
    list-style-type: none;
    margin-right: 30px;
  }
}

.faq-list-item {
  position: relative;
  width: 583px;
  height: 67px;
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 24px;
}

.faq-list-question {
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  margin: 22px 0 0 24px;
}

.toggle-icon {
  margin: 21px 20px 0 0;
  width: 24px;
  height: 24px;
}

.active-question-description {
  height: 100px;
  width: 545px;
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 170%;
  color: #FFFFFF;
  margin: 32px 0 40px 29px;
}
</style>