import { APIRequestContext } from "@playwright/test";
import { ENDPOINTS } from "../constants/endpoints";
import { buildAuthHeaders } from "../constants/headers";
import { APIResponse } from "@playwright/test";

export async function createOffer(
  request: APIRequestContext,
  token: string,
  payload: any
): Promise<APIResponse> {

  try {
    console.log("🚀 START createOffer");

    console.log("TOKEN LENGTH:", token?.length);

    console.log("HEADERS:");
    console.dir(buildAuthHeaders(token), { depth: null });

    console.log("PAYLOAD:");
    console.dir(payload, { depth: null });

    console.log("➡️ BEFORE request.post");

    const start = Date.now();

    const responsePromise = request.post(
      ENDPOINTS.OFFER.CREATE,
      {
        headers: buildAuthHeaders(token),
        data: payload,
        timeout: 60000
      }
    );

    console.log("📡 request.post CALLED (promise created)");

    const response = await responsePromise;

    console.log("⏱ TIME TAKEN:", Date.now() - start, "ms");

    console.log("✅ AFTER await");

    console.log("STATUS:", response.status());

    const text = await response.text();
    console.log("RESPONSE:", text);

    return response;

  } catch (error) {
    console.error("❌ REQUEST FAILED:", error);
    throw error;
  }
}