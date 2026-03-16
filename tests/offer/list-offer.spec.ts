import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { listOffers } from "../../services/offer-service";
import { runtimeConfig } from "../../config/env";
import { listOfferScenarios } from "../../test-data/list-offer/list-offer.scenarios";
import { fetchOffers } from "../../utils/offer-helper";

test.describe("List Offers API", () => {

    const buId = Number(runtimeConfig.buId);


      test("Should filter/list offers successfully", async ({ request, token }) => {
            const queryParams = listOfferScenarios.valid(buId);
            const { status, body } = await fetchOffers(request, token, queryParams);
            expect(status).toBe(200);
            expect(body).toBeDefined();

      });

    //   test("Fetch filtered offers with an invalid Limit parameter (Negative Case)", async ({ request, token }) => {
    //         const queryParams = {
    //             buId: buId,
    //             page: 0,
    //             limit: -1, 
    //             q: "",
    //             status: "ALL",
    //             sortBy: "DATE",
    //             order: "DESC"
    //         };

    //         const response = await filterOffers(request, token, queryParams);
    //         expect(response.status()).toBe(400);

    // });

    // test("Fetch filtered offers missing mandatory buId parameter", async ({ request, token }) => {
    //         const queryParams = {
    //             page: 0,
    //             limit: 10,
    //             q: "",
    //             status: "ALL",
    //             sortBy: "DATE",
    //             order: "DESC"
    //         };

    //         const response = await filterOffers(request, token, queryParams);
    //          expect(response.status()).toBe(400);

    // });

    // test("Should verify pagination limits correctly", async ({ request, token }) => {
    //     const queryParams = {
    //         buId: buId,
    //         page: 0,
    //         limit: 2,
    //         q: "",
    //         status: "ALL",
    //         sortBy: "DATE",
    //         order: "DESC"
    //     };

    //     const response = await filterOffers(request, token, queryParams);
    //     expect(response.status()).toBe(200);

    //     const responseBody = await response.json();
    //     console.log("RESPONSE BODY:", JSON.stringify(responseBody, null, 2));

    //     const items =responseBody.results;
    //     expect(Array.isArray(items)).toBeTruthy();
    //     expect(items.length).toBeLessThanOrEqual(2);
    // });

    //   test("Should return empty list for non-existent search query", async ({ request, token }) => {
    //         const queryParams = {
    //             buId: buId,
    //             page: 0,
    //             limit: 10,
    //             q: "some-random-string-that-does-not-exist-12345",
    //             status: "ALL",
    //             sortBy: "DATE",
    //             order: "DESC"
    //         };

    //         const response = await filterOffers(request, token, queryParams);
    //         expect(response.status()).toBe(200);

    //         const responseBody = await response.json();
    //         const items = responseBody.results;
    //         expect(items.length).toBe(0);
    //   });

    //   test("Fetch filtered offers with an invalid status (Negative Case)", async ({ request, token }) => {
    //         const queryParams = {
    //             buId: buId,
    //             page: 0,
    //             limit: 10,
    //             q: "",
    //             status: "INVALID_STATUS_VALUE", 
    //             sortBy: "DATE",
    //             order: "DESC"
    //         };

    //         const response = await filterOffers(request, token, queryParams);
    //         expect(response.status()).toBe(400); 
    //   });

    //   test("Should prevent unauthenticated access", async ({ request }) => {
    //         const queryParams = {
    //             buId: buId,
    //             page: 0,
    //             limit: 10,
    //             q: "",
    //             status: "ALL",
    //             sortBy: "DATE",
    //             order: "DESC"
    //         };

    //         let invalidToken = "invalid-token-123";
    //         const response = await filterOffers(request, invalidToken, queryParams);
    //         expect(response.status()).toBe(403); 
    //   });


})