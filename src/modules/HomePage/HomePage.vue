<template>
  <div v-if="isResultsModal || isContactModal">
    <results-modal v-if="isResultsModal && !isContactModal" :base-url="baseUrl"/>
    <contact-modal v-if="isContactModal" :phone-number="phoneNumber" :email="email" :google-form="googleForm"/>
  </div>
  <div v-else class="main-page">
    <first-section :phone-number="phoneNumber" :email="email" @on-see-results-click="onResultsCLick"/>
    <second-section/>
    <third-section :base-url="baseUrl"/>
    <fourth-section :phone-number="phoneNumber" :email="email"/>
    <fifth-section/>
<!--    <sixth-section :base-url="baseUrl"/>-->
    <seventh-section :phone-number="phoneNumber" :email="email"/>
  </div>
</template>

<script>
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import {createNamespacedHelpers} from "vuex";
import ResultsModal from "./ResultsModal";
import ContactModal from "./ContactModal";
import SeventhSection from "./SeventhSection";
import SixthSection from "./SixthSection";

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "HomePage",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    // SixthSection,
    SeventhSection,
    ContactModal,
    ResultsModal,
  },
  data() {
    return {
      phoneNumber: '+995557386688',
      email: 'holla@klaster.ge',
      googleForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeQE58YvHe0S1XRwTFxRz8Hfq6GkKWs4XCP90xqafjV0VGtmA/viewform',
      baseUrl: process.env.VUE_APP_API_HOST,
    }
  },
  computed: {
    ...mapState({
      isResultsModal: state => state.results.modal.show,
      isContactModal: state => state.contact.modal.show
    }),
  },
  methods: {
    ...mapActions(['showResultsModal']),
    onResultsCLick(selectedValues) {
      this.showResultsModal(selectedValues);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>