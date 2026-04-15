import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from "../../config/env";
import { createOffer } from "../../services/offer-service";
import { billOfferScenarios } from "../../test-data/bill-level/bill-offer.scenarios";

test("Create bill offer with single condition", async ({ request, token }) => {
  test.setTimeout(60000);

  const buId = Number(runtimeConfig.buId);
  const payload = billOfferScenarios.validSingleCondition(buId);

  console.log("=== TEST CONTEXT 1 ===");
  console.log("Tenant ID:", runtimeConfig.tenantId);
  console.log("BU ID:", runtimeConfig.buId);
  console.log("User:", runtimeConfig.username);

  console.log("=== TOKEN ===");
  console.log(token ? `${token.substring(0, 20)}...` : "No Token"); // masked

  console.log("=== PAYLOAD ===");
  console.dir(payload, { depth: null });

  const response = await createOffer(request, token, payload);

  console.log("Status:", response.status());
  await expect(response).toBeOK();
});

test("Create bill offer with multiple conditions", async ({ request, token }) => {
  const buId = Number(runtimeConfig.buId);
  const payload = billOfferScenarios.validMultipleConditions(buId);
    console.log("=== PAYLOAD ===");
  console.dir(payload, { depth: null });
  const response = await createOffer(request, token, payload);
  await expect(response).toBeOK();
  const body = await response.json();
  expect(body).toMatchObject({
    status: "success"
  });
});

 test("Create offer with empty payload", async ({ request, token }) => {
  const payload = {};
    console.log("=== PAYLOAD ===");
  console.dir(payload, { depth: null });
  const response = await createOffer(request, token, payload);
  await expect(response.status()).toBe(400);
});

test("Create offer with invalid range", async ({ request, token }) => {
  const payload = billOfferScenarios.invalidRange(Number(runtimeConfig.buId));
    console.log("=== PAYLOAD ===");
  console.dir(payload, { depth: null });
  const response = await createOffer(request, token, payload);
  await expect(response.status()).not.toBe(200);
});


test("Should not allow duplicate offer code", async ({ request, token }) => {
  const buId = Number(runtimeConfig.buId);
  const duplicateCode = "DUPLICATE123";
  const payload1 = billOfferScenarios.duplicateCode(buId, duplicateCode);
  const response1 = await createOffer(request, token, payload1);
  console.log("First Offer Status:", response1.status());
  await expect(response1).toBeOK();
  const payload2 = billOfferScenarios.duplicateCode(buId, duplicateCode);
  const response2 = await createOffer(request, token, payload2);
  const status = response2.status();
  const body = await response2.text();
  console.log("Second Offer Status:", status);
  console.log("Duplicate Response:", body);
  expect(status).toBeGreaterThanOrEqual(400);
});


//------------bill-level (PERCENTAGE)-------------------------------
test("Create bill offer with percentage", async ({ request, token }) => {
  const buId = Number(runtimeConfig.buId);
  const payload = billOfferScenarios.validPercentage(buId);
  console.log("=== PAYLOAD ===");
  console.dir(payload, { depth: null });
  const response = await createOffer(request, token, payload);
  console.log("Status:", response.status());
  await expect(response).toBeOK();
});
