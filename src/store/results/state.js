const STATE = {
  defaultValues: {
    package: 'minimal',
    insurance: 'life',
  },
  results: {
    modal: {
      show: false,
      packageData: [],
      statisticData: {
        companies: 0,
        persons: 0,
      },
      data: [
        {
          title: 'ავტომობილის',
          packageName: 'მინიმალური',
          type: 'life',
          package: 'minimal',
          link: '',
          text: 'ავტომობილის მინიმალური დაზღვევა წარმოადგენს აუცილებელ ატრიბუტს ნებისმიერ მძღოლისთვის. კლასტერთან ერთად, საფასური აღწევს მინიმალურ ნიშნულს.'
        },
        {
          title: 'ავტომობილის',
          packageName: 'საბაზისო',
          type: 'life',
          package: 'basic',
          link: '',
          text: 'ავტომობილის საბაზისო დაზღვევა იდეალურია იმ ბიზნესებისთვის, რომელთა ყოველდღიურ საქმიანობასაც მოიცავს დისტრიბუცია და ტრანსპორტირება.'
        },
        {
          title: 'ავტომობილის',
          packageName: 'გაუმჯობესებული',
          type: 'life',
          package: 'improved',
          link: '',
          text: 'ავტომობილის გაუმჯობესებული დაზღვევა ერგება საშუალოზე მაღალი ღირებულების მანქანებს, რომელთა იდეალურად შენარჩუნებაც არის კრიტიკულად მნიშვნელოვანი.'
        },
        {
          title: 'ჯანმრთელობის',
          packageName: 'მინიმალური',
          type: 'health',
          package: 'minimal',
          link: '',
          text: 'ჯანმრთელობის მინიმალური დაზღვევა ფარავს ელემენტარულ სამედიცინო მომსახურებებს. კლასტერთან ერთად, საფასური აღწევს მინიმალურ ნიშნულს.'
        },
        {
          title: 'ჯანმრთელობის',
          packageName: 'საბაზისო',
          type: 'health',
          package: 'basic',
          link: '',
          text: 'ჯანმრთელობის საბაზისო დაზღვევა არის ყველაზე მოთხოვნადი პროდუქტი.'
        },
        {
          title: 'ჯანმრთელობის',
          packageName: 'გაუმჯობესებული',
          type: 'health',
          package: 'improved',
          link: '',
          text: 'ჯანმრთელობის გაუმჯობესებული დაზღვევა არის ნებისმიერ დროს პრემიუმ სამედიცინოზე წვდომის გარანტი.'
        },
      ],
      selectedItem: {},
    }
  },
  contact: {
    modal: {
      show: false,
    }
  },
  providers: [],
  feedbackData: [],
  faqData: [],
  scrollYPosition: 0,
};

export default STATE;
