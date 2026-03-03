import { ENDPOINTS } from "../constants/endpoints";

export async function createOffer(request, payload) {
  return request.post(ENDPOINTS.CREATE_OFFER, {
    data: payload,
    // reporter: 'html'
  });
}

export async function listOffers(request) {
  return request.get(ENDPOINTS.LIST_OFFERS);
}
