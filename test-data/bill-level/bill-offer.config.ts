export const billOfferDefinition = {
  className: "OfferRule",

  billCondition: {
    joinType: "AND",
    className: "JoinCondition",
    conditions: []
  },

  billAggregateCondition: {
    joinType: "OR",
    className: "JoinCondition",
    conditions: []
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
};