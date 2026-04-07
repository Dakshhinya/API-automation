export const billOfferDefinition = {
  className: "OfferRule",

  bucket: {
    buckets: [],
    bucketId: 1,
    joinType: "AND",
    className: "JoinBucket"
  },

  billDiscount: {
    rule: {
      type: "all",
      value: 1,
      className: "DiscountRule"
    },
    value: 10,
    className: "Discount",
    offerType: "BILL_VALUE",
    maxDiscount: 0,
    discountType: "fixed",
    applicationMethod: {
      value: 1,
      method: "all",
      className: "ApplicationMethod"
    }
  },

  billCondition: {
    joinType: "AND",
    className: "JoinCondition",
    conditions: [
      {
        className: "FieldCondition",
        fieldAccessor: "billAmount",
        operator: {
          name: "BETWEEN",
          className: "Operator",
          operatorType: "number"
        },
        value: "10~1000"
      }
    ]
  },

  billAggregateCondition: {
    joinType: "OR",
    className: "JoinCondition",
    conditions: []
  }
};