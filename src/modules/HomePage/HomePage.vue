<template>
  <div v-if="isResultsModal || isContactModal">
    <results-modal v-if="isResultsModal"/>
    <contact-modal v-if="isContactModal"/>
  </div>
  <div v-else class="main-page">
    <first-section :phone-number="NUMBER" :email="EMAIL" @on-see-results-click="onResultsCLick"/>
    <second-section/>
    <third-section/>
    <fourth-section :phone-number="NUMBER" :email="EMAIL"/>
    <fifth-section/>
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

const {mapState, mapActions} = createNamespacedHelpers('results');
export default {
  name: "HomePage",
  components: {ContactModal, ResultsModal, FifthSection, FourthSection, ThirdSection, SecondSection, FirstSection},
  data() {
    return {
      MESSENGER_URL: 'process.env.MESSENGER_URL',
      NUMBER: 'process.env.NUMBER',
      EMAIL: 'process.env.EMAIL',
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