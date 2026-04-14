import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
// import { listOffers } from "../../services/offer-service";
import { runtimeConfig } from "../../config/env";
import { listOfferScenarios } from "../../test-data/list-offer/list-offer.scenarios";
import { fetchOffers } from "../../utils/offer-helper";
import { buildListOfferQuery } from "../../utils/query-builder";

test.describe("List Offers API", () => {

    const buId = Number(runtimeConfig.buId);


    test("Should fetch limited offers (3 records)", async ({ request, token }) => {
  const queryParams = buildListOfferQuery({
    buId: buId,
    limit: 3,
    fields: "name,code"
  });
  console.log("=== QUERY PARAMS ===");
  console.log(queryParams);
  const { status, body } = await fetchOffers(request, token, queryParams);
  const results = body?.results || [];
  console.log("=== RESPONSE STATUS ===", status);
  console.log("=== RECORD COUNT ===", results.length);
  expect(status).toBe(200);
  expect(Array.isArray(results)).toBeTruthy();
  expect(results.length).toBeLessThanOrEqual(3);
});

test("Should fail for invalid limit", async ({ request, token }) => {
  const queryParams = buildListOfferQuery({
    buId: buId,
    limit: -1
  });

  console.log("=== INVALID LIMIT QUERY ===");
  console.log(queryParams);

  const { status, body } = await fetchOffers(request, token, queryParams);

  console.log("=== RESPONSE STATUS ===", status);
  console.log("=== RESPONSE BODY ===", body);

  expect(status).toBeGreaterThanOrEqual(400);
});

})