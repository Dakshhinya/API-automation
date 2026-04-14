import { APIRequestContext } from "@playwright/test";
import { listOffers } from "../services/offer-service";

export async function fetchOffers(
  request: APIRequestContext,
  token: string,
  queryParams: Record<string, any>
) {
  const response = await listOffers(request, token, queryParams);

  const status = response.status();

  let body;

  try {
    body = await response.json();
  } catch {
    body = await response.text();
  }

  return { status, body };
}