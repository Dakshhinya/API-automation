import { faker } from "@faker-js/faker";
import { runtimeConfig } from "../config/env";


export const generateOfferPayload = (buId : Number) => {

  const random = Math.floor(Math.random() * 100000);
  const offerName = `TEST_${faker.string.alphanumeric(8).toUpperCase()}`;
  const offerCode = faker.string.alphanumeric(6).toUpperCase();

   return {
    code: offerCode,
    tenantBrandBusinessId: buId,
    name: offerName,
    description: faker.lorem.sentence(),
    category_id: null,
    sortOrder: "0",
    redemptionLimit: "0",
    redemptionLimitPerCustomer: "1",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 86400000).toISOString(),
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
    maximumRedemptionAmountPerUser: null,
    offerDefinition: {
      className: "OfferRule",
      billCondition: {
        className: "JoinCondition",
        joinType: "AND",
        conditions: [
          {
            className: "FieldCondition",
            fieldAccessor: "storeName",
            value: ["DBR02"],
            operator: {
              className: "Operator",
              operatorType: "string",
              name: "isIn"
            }
          }
        ]
      }
    },
    categoryId: null,
    offerRules: null
  };
};