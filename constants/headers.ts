import { runtimeConfig } from "../config/env";

export function buildAuthHeaders(token: string) {
  
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",

    "business-id": runtimeConfig.buId,
    "tenant-id": runtimeConfig.tenantId,
    "business-name": runtimeConfig.username,
  };
}