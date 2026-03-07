import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { listOffers } from "../../services/offer-service";

test.describe("List Offers API", () => {

  test("Should list offers successfully", async ({ request, token }) => {
    const response = await listOffers(request, token);
    expect(response.status()).toBe(200);
    await expect(response).toBeOK();
    const responseBody = await response.json();
    expect(responseBody).toBeDefined();
  });

});
