// test-data/offer.base.ts

import { fakerEN as faker } from "@faker-js/faker";

export const generateBaseOffer = (buId: number) => {
  return {
    code: faker.string.alpha({ length: 6, casing: "upper" }),
    tenantBrandBusinessId: buId,
    name: `${faker.commerce.product()} Offer`,
    description: "Automation Offer",
    sortOrder: "0",
    redemptionLimit: "0",
    redemptionLimitPerCustomer: "0",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3 * 86400000).toISOString(),
    type: "Offer",
    isCustomerSpecific: false,
    amount: 0,
    maxLimit: -1,
    status: 0,
    remarks: "Remark",
    eligibility: "BILL_VALUE",
    metaFields: [],
    tags: [],
    imageUrl: "",
    bannerImageUrl: "",
    loyaltyVendorInfo: {
      isInternal: false,
      allowRedemptionOnPromoItem: false,
      ginesysProductOffer: false,
      isGinesysOffer: false
    },
    products: [],
    maximumRedemptionAmount: null,
    maximumRedemptionAmountPerUser: null
  };
};