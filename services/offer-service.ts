import { APIRequestContext, APIResponse } from "@playwright/test";
import { ENDPOINTS } from "../constants/endpoints";
import { buildAuthHeaders } from "../constants/headers";

export async function createOffer(
  request: APIRequestContext,
  token: string,
  payload: any,
): Promise<APIResponse> {

  const response = await request.post(
    ENDPOINTS.OFFER.CREATE,
    {
      headers: buildAuthHeaders(token),
      data: payload,
      timeout: 60000
    }
  );

  if (!response.ok()) {
    const errorBody = await response.text();
    console.error("Create Offer API Failed:", response.status(), errorBody);
  }

  return response;
}

export async function listOffers(
  request: APIRequestContext,
  token: string,
  queryParams: Record<string, any>
): Promise<APIResponse> {
  const response = await request.get(
    ENDPOINTS.OFFER.FILTER, 
    {
    headers: buildAuthHeaders(token),
    params: queryParams,
    timeout: 60000
  });

  if (!response.ok()) {
    console.error("List Offers API Failed:", response.status());
  }

  return response;
}