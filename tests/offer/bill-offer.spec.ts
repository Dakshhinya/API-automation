import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { runtimeConfig } from "../../config/env";
import { createOffer } from "../../services/offer-service";
import { billOfferScenarios } from "../../test-data/bill-level/bill-offer.scenarios";

test.describe("Bill Level Offer API", () => {

  const buId = Number(runtimeConfig.buId);

  test.describe("Positive Cases", () => {

    test("Create bill offer with single condition", async ({ request, token }) => {

      const payload = billOfferScenarios.validSingleCondition(buId);
      console.log("Payload:", JSON.stringify(payload, null, 2));
      const response = await createOffer(request, token, payload);

      await expect(response).toBeOK();

      const body = await response.json();
      console.log("Single Condition Response:", body);

      expect(body).toEqual(
        expect.objectContaining({
          status: "success"
        })
      );
    });


  //   test("Create bill offer with multiple conditions", async ({ request, token }) => {

  //     const payload = billOfferScenarios.validMultipleConditions(buId);

  //     const response = await createOffer(request, token, payload);

  //     await expect(response).toBeOK();

  //     const body = await response.json();
  //     console.log("Multiple Condition Response:", body);

  //     expect(body).toEqual(
  //       expect.objectContaining({
  //         status: "success"
  //       })
  //     );
  //   });

  // });


  // test.describe("Negative Cases", () => {

  //   test("Create offer with empty payload", async ({ request, token }) => {

  //     const payload = billOfferScenarios.emptyPayload();

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Empty Payload Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });


  //   test("Create offer with invalid range", async ({ request, token }) => {

  //     const payload = billOfferScenarios.invalidRange(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Invalid Range Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });


  //   test("Create offer with overlapping ranges", async ({ request, token }) => {

  //     const payload = billOfferScenarios.overlappingRange(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Overlapping Range Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });


  //   test("Create offer with missing offerAmount", async ({ request, token }) => {

  //     const payload = billOfferScenarios.missingOfferAmount(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Missing Offer Amount Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });


  //   test("Create offer with negative offerAmount", async ({ request, token }) => {

  //     const payload = billOfferScenarios.negativeOfferAmount(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Negative Offer Amount Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });

  // });


  // test.describe("Percentage Offer Cases", () => {

  //   test("Create percentage offer", async ({ request, token }) => {

  //     const payload = billOfferScenarios.validPercentage(buId);

  //     const response = await createOffer(request, token, payload);

  //     await expect(response).toBeOK();

  //     const body = await response.json();
  //     console.log("Valid Percentage Response:", body);

  //     expect(body.status).toBe("success");
  //   });


  //   test("Percentage greater than 100", async ({ request, token }) => {

  //     const payload = billOfferScenarios.invalidPercentage(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Invalid Percentage Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });


  //   test("Missing upto field", async ({ request, token }) => {

  //     const payload = billOfferScenarios.missingUpto(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Missing Upto Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });


  //   test("Negative percentage", async ({ request, token }) => {

  //     const payload = billOfferScenarios.negativePercentage(buId);

  //     const response = await createOffer(request, token, payload);

  //     const body = await response.json();
  //     console.log("Negative Percentage Response:", body);

  //     expect(body.status).not.toBe("success");
  //   });

  });

});