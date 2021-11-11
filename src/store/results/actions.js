import {HIDE_CONTACT_MODAL, HIDE_RESULTS_MODAL, SHOW_CONTACT_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";
import httpService from "../../core/services/httpService";

export async function showResultsModal({commit}, {insurance, selectedPackage}) {
  const response = await httpService.get(`/v1/customers/stats?insurance_type=${insurance}&package_type=${selectedPackage}`)
  if (response.success) {
    commit(SHOW_RESULTS_MODAL, response.body)

  }
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