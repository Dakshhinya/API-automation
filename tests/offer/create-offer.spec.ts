import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from "../../config/env";

test("Create Offer", async ({ request, token }) => {

  const response = await request.post('/users/offers/saveOffer', {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: {
    tenantId: Number(runtimeConfig.tenantId),
    buId: Number(runtimeConfig.buId),
    name: "Auto_Test"
  }
  });

  console.log(await response.text());

  expect(response.status()).toBe(200);
});