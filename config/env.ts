import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.ENV || "qa"}`,
  override: true,
});

export const runtimeConfig = {
  baseUrl: process.env.BASE_URL || "",
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
  tenantId: process.env.TENANT_ID || "",
  buId: process.env.BU_ID || "",
};

