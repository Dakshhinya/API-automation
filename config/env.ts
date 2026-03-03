import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.ENV || "qa"}`,
  override: true, // 🔥 THIS IS THE FIX
});

export const runtimeConfig = {
  baseUrl: process.env.BASE_URL || "",
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
  tenantId: process.env.TENANT_ID || "",
  buId: process.env.BU_ID || "",
};

console.log("Loaded Username:", runtimeConfig.username);
console.log("Loaded Password:", runtimeConfig.password);