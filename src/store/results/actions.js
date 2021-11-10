import {HIDE_CONTACT_MODAL, HIDE_RESULTS_MODAL, SHOW_CONTACT_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";

export async function showResultsModal({commit}, data) {
  // const response = await httpService.get('url', data)
  // if (response.success) {
  commit(SHOW_RESULTS_MODAL, data)
  // }
}

export async function hideResultsModal({commit}) {
  commit(HIDE_RESULTS_MODAL)
}

export async function showContactModal({commit}) {
  commit(SHOW_CONTACT_MODAL)
}

export async function hideContactModal({commit}) {
  commit(HIDE_CONTACT_MODAL)
}