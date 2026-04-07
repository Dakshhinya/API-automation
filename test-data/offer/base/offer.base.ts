import { fakerEN as faker } from "@faker-js/faker";
import { runtimeConfig } from "../../../config/env";
import { billOfferDefinition } from "../../bill-level/bill-offer.config";

export const generateBaseOffer = (buId: number) => {
  const code = faker.string.alpha({ length: 6 }).toUpperCase();

  return {
    cId: `${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    code,
    tenantId: Number(runtimeConfig.tenantId),
    tenantBrandBusinessId: buId,

    name: "Test Offer",
    description: "Automation Offer",

    type: "Offer",
    eligibility: "BILL_VALUE",
    isCustomerSpecific: false,

    amount: 0, // ✅ ADD
    maxLimit: -1,

    sortOrder: "0",
    redemptionLimit: "0",
    redemptionLimitPerCustomer: "0",

    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 86400000).toISOString(),

    status: 0,
    remarks: "",
    imageUrl: "",
    bannerImageUrl: "",

    tags: [],
    metaFields: [],
    products: [],

    categoryId: null,             
    category_id: null,             
    offerRules: null,              

    maximumRedemptionAmount: null,         
    maximumRedemptionAmountPerUser: null,  

    loyaltyVendorInfo: {
      isInternal: false,
      allowRedemptionOnPromoItem: false,
      ginesysProductOffer: false,
      isGinesysOffer: false
    }
  };
};

console.log("CONDITIONS:", JSON.stringify(billOfferDefinition.billAggregateCondition.conditions, null, 2));