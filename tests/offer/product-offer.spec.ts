import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from "../../config/env";
import { createOffer } from "../../services/offer-service";
import { productOfferScenarios } from "../../test-data/product-level/product-offer.scenarios";

test.describe("Product Level Offer API", () => {

  const buId = Number(runtimeConfig.buId);

   test("Create valid product offer", async ({ request, token }) => {

    const payload = productOfferScenarios.valid(buId);
    console.log("Product Offer Payload:");
    console.log(JSON.stringify(payload, null, 2));
    const response = await createOffer(request, token, payload);
    console.log("Response Status:", response.status());
    await expect(response).toBeOK();

  });
test("Create product offer with empty payload", async ({ request, token }) => {
   console.log("=== PAYLOAD ===");
   console.log(JSON.stringify({}, null, 2));
  const response = await createOffer(request, token, {});
  await expect(response.status()).toBe(400);
});

test("Create product offer with missing fields", async ({ request, token }) => {
  const payload = productOfferScenarios.missingFields(buId);
  console.log("=== PAYLOAD ===");
  console.log(JSON.stringify(payload, null, 2));
  const response = await createOffer(request, token, payload);
  expect(response.status()).toBeGreaterThanOrEqual(400);
});

});

