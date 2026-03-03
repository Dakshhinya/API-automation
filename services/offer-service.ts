import { APIRequestContext } from "@playwright/test";
import { ENDPOINTS } from "../constants/endpoints";
import { buildAuthHeaders } from "../constants/headers";

export async function createOffer(
  request: APIRequestContext,
  token: string,
  payload: any
) {
  return request.post(ENDPOINTS.OFFER.CREATE, {
    headers: buildAuthHeaders(token),
    data: payload,
  });
}

export async function listOffers(
  request: APIRequestContext,
  token: string
) {
  return request.get(ENDPOINTS.OFFER.LIST, {
    headers: buildAuthHeaders(token),
  });
}