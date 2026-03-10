import { APIRequestContext } from "@playwright/test";
import { runtimeConfig } from "../config/env";

export async function loginAndGetToken(
  request: APIRequestContext
): Promise<string> {

  const response = await request.post(
    "https://auth.casaqa.ajira.tech/auth/realms/casa/protocol/openid-connect/token",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
        form: {
        grant_type: "password",
        client_id: "casa_dashboard",
        username: runtimeConfig.username.trim(),
        password: runtimeConfig.password.trim(),
        },
    }
  );

  if (!response.ok()) {
    throw new Error(
      `Login failed: ${response.status()} - ${await response.text()}`
    );
  }

  const body = await response.json();

  return body.access_token; 
}