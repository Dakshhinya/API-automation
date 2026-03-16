import { test as base } from "@playwright/test";
import { loginAndGetToken } from "../auth/auth.service";

export const test = base.extend<{
  token: string;
  
}>({

  token: async ({ request }, use) => {
    const token = await loginAndGetToken(request);
    await use(token);
  },
});