import { APIRequestContext } from "@playwright/test";
import { ENDPOINTS } from "../constants/endpoints";

export async function createOffer(
  request: APIRequestContext,
  payload: any
) {
  return request.post(ENDPOINTS.OFFER.CREATE, {
    data: payload,
  });
}

export async function listOffers(request: APIRequestContext) {
  return request.get(ENDPOINTS.OFFER.LIST);
}