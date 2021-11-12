import {
  HIDE_CONTACT_MODAL,
  HIDE_RESULTS_MODAL,
  SET_FEEDBACK_DATA,
  SET_PROVIDERS,
  SET_SELECTED_VALUES,
  SHOW_CONTACT_MODAL,
  SHOW_RESULTS_MODAL
} from "./mutation-types";

export default {
  [SHOW_RESULTS_MODAL](state, data) {
    state.results.modal.show = true
    if (data.packageData.length) {
      state.results.modal.packageData = [...data.packageData.sort((a, b) => {
        if (a.price_per_month < b.price_per_month) {
          return -1
        }
        if (a.price_per_month > b.price_per_month) {
          return 1
        }
        return 0
      })]
    }
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
  },
  [SET_PROVIDERS](state, data) {
    if (data) {
      state.providers = [...data]
    }
  },
  [SET_FEEDBACK_DATA](state, data) {
    if (data) {
      state.feedbackData = [...data]
    }
  },
  [SET_SELECTED_VALUES](state, data) {
    state.defaultValues = {...data}
  }
}
