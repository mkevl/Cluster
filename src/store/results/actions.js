import {HIDE_RESULTS_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";

export async function showResultsModal({commit}, data) {
  // const response = await httpService.get('url', data)
  // if (response.success) {
  commit(SHOW_RESULTS_MODAL, data)
  // }
}

export async function hideResultsModal({commit}) {
  console.log("aaaaaaaaaaaa")
  commit(HIDE_RESULTS_MODAL)
}