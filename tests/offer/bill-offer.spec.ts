import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from "../../config/env";
import { createOffer } from "../../services/offer-service";
import { billOfferScenarios } from "../../test-data/bill-level/bill-offer.scenarios";

test.describe("Bill Level Offer API", () => {

  const buId = Number(runtimeConfig.buId);

  test.describe("Positive Flow", () => {

    test("Create valid bill offer", async ({ request, token }) => {
      const payload = billOfferScenarios.valid(buId);
      const response = await createOffer(request, token, payload);
      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(body).toBeTruthy();
    });

  });


  test.describe("Payload Validations", () => {

    test("Create offer with empty payload", async ({ request, token }) => {
      const payload = billOfferScenarios.empty();
      const response = await createOffer(request, token, payload);
      expect(response.status()).toBe(400);
    });

    test("Create offer with invalid buId", async ({ request, token }) => {
      const payload = billOfferScenarios.valid(9999);
      const response = await createOffer(request, token, payload);
      expect(response.status()).toBe(400);
    });

  });


});