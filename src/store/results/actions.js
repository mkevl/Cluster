import {HIDE_CONTACT_MODAL, HIDE_RESULTS_MODAL, SHOW_CONTACT_MODAL, SHOW_RESULTS_MODAL} from "./mutation-types";
import httpService from "../../core/services/httpService";
// localhost:8000/api/v1/insurance/providers/
// localhost:8000/api/v1/insurance/packages/?insurance_type=health&package_type=basic
// localhost:8000/api/v1/customers/stats?insurance_type=health&package_type=basic
// localhost:8000/api/v1/feedback/
export async function showResultsModal({commit}, {insurance, selectedPackage}) {
  const packageData = await httpService.get(`/v1/insurance/packages?insurance_type=${insurance}&package_type=${selectedPackage}`)
  const statisticData = await httpService.get(`/v1/customers/stats?insurance_type=${insurance}&package_type=${selectedPackage}`)
  if (packageData.success && statisticData.success) {
    const data = {
      packageData: packageData.body,
      statisticData: statisticData.body
    }
    commit(SHOW_RESULTS_MODAL, data)

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