import { test as base, request as playwrightRequest } from "@playwright/test";
import { loginAndGetToken } from "../auth/auth.service";
import { runtimeConfig } from "../config/env";

export const test = base.extend<{
  token: string;
  request: any;
}>({
  request: async ({}, use) => {
    const context = await playwrightRequest.newContext({
      baseURL: runtimeConfig.baseUrl,
    });

    await use(context);
  },

  token: async ({ request }, use) => {
    const token = await loginAndGetToken(request);
    await use(token);
  },
});