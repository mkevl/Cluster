import {HIDE_RESULTS_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";

export default {
  [SHOW_RESULTS_MODAL](state, data) {
    state.results.modal.show = true
    state.results.modal.data = data
  },
  [HIDE_RESULTS_MODAL](state) {
    state.results.modal.show = false
    state.results.modal.data = {}
  }
}
