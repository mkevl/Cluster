import {HIDE_RESULTS_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";

export default {
  [SHOW_RESULTS_MODAL](state, data) {
    data = [
      {uuid: '1', price_per_month: 44, provider_logo_url: 'assets/providers/tbc_logo_2.png'},
      {uuid: '2', price_per_month: 43, provider_logo_url: 'assets/providers/tbc_logo_2.png'},
      {uuid: '3', price_per_month: 47, provider_logo_url: 'assets/providers/tbc_logo_2.png'},
      {uuid: '4', price_per_month: 41, provider_logo_url: 'assets/providers/tbc_logo_2.png'},
    ]
    state.results.modal.show = true
    state.results.modal.data = data.sort((a, b) => {
      if (a.price_per_month < b.price_per_month) {
        return -1
      }
      if (a.price_per_month > b.price_per_month) {
        return 1
      }
      return 0
    })
  },
  [HIDE_RESULTS_MODAL](state) {
    state.results.modal.show = false
    state.results.modal.data = {}
  }
}
