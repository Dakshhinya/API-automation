import { fakerEN as faker } from "@faker-js/faker";

export const generateOfferPayload = (buId: number) => {
  const offerName = `${faker.commerce.product()} Offer`;
  const offerCode = faker.string.alpha({ length: 6, casing: "upper" });
    
  return {
    code: offerCode,
    tenantBrandBusinessId: buId,
    name: offerName,
    description: `Get exciting discounts on ${faker.commerce.product()} this ${faker.date.month()}!`,
    category_id: null,
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
  },

  billAggregateCondition: {
    className: "JoinCondition",
    joinType: "OR",
    conditions: [
      {
        className: "FieldCondition",
        fieldAccessor: "billAmount",
        value: "1~1000",
        operator: {
          className: "Operator",
          operatorType: "number",
          name: "BETWEEN"
        },
        billDiscount: {
          className: "Discount",
          value: "500"
        }
      }
    ]
  },

  billDiscount: {
    className: "Discount",
    discountType: "fixed",
    maxDiscount: 0,
    value: 0,
    offerType: "BILL_VALUE",
    rule: {
      className: "DiscountRule",
      type: "all",
      value: 1
    },
    applicationMethod: {
      className: "ApplicationMethod",
      method: "all",
      value: 1
    }
  },

  bucket: {
    className: "JoinBucket",
    bucketId: 1,
    joinType: "AND",
    buckets: []
  }
},

    categoryId: null,
    offerRules: null
  };
};