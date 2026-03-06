import { generateBaseOffer } from '../../test-data/offer.base';
import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from '../../config/env';
import { createOffer } from "../../services/offer-service";



test("Create Offer", async ({ request, token }) => {

  const payload = generateBaseOffer(Number(runtimeConfig.buId));

  const response = await createOffer(request, token, payload);

  await expect(response).toBeOK();
});