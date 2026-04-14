import dotenv from "dotenv";
import users from "../test-data/users.json";

dotenv.config({
  path: `.env.${process.env.ENV || "qa"}`,
  override: true,
});

const userKey = process.env.TEST_USER || "fashionfolks";
const user = (users as any)[userKey];

if (!user) {
  throw new Error(`User '${userKey}' not found`);
}

export const runtimeConfig = {
  baseUrl: user.BASE_URL,
  tenantId: user.TENANT_ID,
  buId: user.BU_ID,
  username: user.USERNAME,
  password: user.PASSWORD,
};