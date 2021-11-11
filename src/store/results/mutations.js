import {HIDE_CONTACT_MODAL, HIDE_RESULTS_MODAL, SHOW_CONTACT_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";

export default {
  [SHOW_RESULTS_MODAL](state, data) {
    state.results.modal.show = true
    state.results.modal.packageData = [...data.packageData]
    state.results.modal.statisticData = {
      companies: data.statisticData.companies,
      persons: data.statisticData.persons,
    }
  },
  [HIDE_RESULTS_MODAL](state) {
    state.results.modal.show = false
    state.results.modal.packageData = []
    state.results.modal.statisticData = {
      companies: 0,
      persons: 0,
    }
  },
  [SHOW_CONTACT_MODAL](state) {
    state.contact.modal.show = true
  },
  [HIDE_CONTACT_MODAL](state) {
    state.contact.modal.show = false
  }
}
