<template>
  <div v-if="isResultsModal || isContactModal">
    <results-modal v-if="isResultsModal"/>
    <contact-modal v-if="isContactModal" :phone-number="phoneNumber" :email="email" :google-form="googleForm"/>
  </div>
  <div v-else class="main-page">
    <first-section :phone-number="phoneNumber" :email="email" @on-see-results-click="onResultsCLick"/>
    <second-section/>
    <third-section/>
    <fourth-section :phone-number="phoneNumber" :email="email"/>
    <fifth-section/>
    <sixth-section/>
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
    SixthSection,
    SeventhSection,
    ContactModal, ResultsModal, FifthSection, FourthSection, ThirdSection, SecondSection, FirstSection
  },
  data() {
    return {
      phoneNumber: '557386688',
      email: 'holla@klaster.ge',
      googleForm: '',
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
    onResultsCLick(insurance, selectedPackage) {
      this.showResultsModal({insurance, selectedPackage});
    },
  },
}
</script>

<style lang="scss" scoped>

</style>