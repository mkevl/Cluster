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
};

export default STATE;
