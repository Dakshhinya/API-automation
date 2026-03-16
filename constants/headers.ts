import { runtimeConfig } from "../config/env";

export const buildAuthHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
  "business-id": runtimeConfig.buId,
  "business-name": "fashionfolks"
})

