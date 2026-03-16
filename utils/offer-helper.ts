import { APIRequestContext } from "@playwright/test";
import { listOffers } from "../services/offer-service";

export async function fetchOffers(
  request: APIRequestContext,
  token: string,
  queryParams: Record<string, any>
) {
  const response = await listOffers(request, token, queryParams);

  const status = response.status();
  const body = await response.json();

  return {
    status,
    body,
    response
  };
}