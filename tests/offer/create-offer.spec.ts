import { generateOfferPayload } from './../../test-data/offer.data';
import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { buildAuthHeaders } from "../../constants/headers";
import { runtimeConfig } from '../../config/env';


test("Create Offer", async ({ request, token }) => {


  const payload = generateOfferPayload(Number(runtimeConfig.buId));
  const headers = buildAuthHeaders(token);

  const response = await request.post('/users/offers/saveOffer', {
    headers,
    data: payload,
  });

  const body = await response.json();

expect(response, JSON.stringify(body)).toBeOK();
});