import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from "../../config/env";
import { Faker } from "@faker-js/faker";

test("Create Offer", async ({ request, token }) => {

    const offerName = `Auto_${faker.company.name()}_${Date.now()}`;
  const offerCode = `CODE_${faker.string.alphanumeric(6)}`;

  const response = await request.post('/users/offers/saveOffer', {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "business-id": runtimeConfig.buId,
      "business-name": "fashionfolks"
    },
    data: {
      code: "offerCode",
      tenantBrandBusinessId: Number(runtimeConfig.buId),
      name: "offerName",
      description: "Des",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 3 * 86400000).toISOString(),
      type: "Offer",
      status: 0,
      eligibility: "BILL_VALUE",
      offerDefinition: {
        className: "OfferRule"
      }
    }
  });

  const body = await response.json();

  expect(response.ok(), JSON.stringify(body)).toBeTruthy();
});