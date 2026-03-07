export const productOfferDefinition = {
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

  // REQUIRED even for product offers
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

    buckets: [
      {
        bucketId: 1,
        className: "ProductBucket",

        discount: {
          className: "ProductDiscount",
          discountType: "percent",
          value: "10",
          maxDiscount: "100",
          offerType: "",

          rule: {
            className: "DiscountRule",
            type: "lowest",
            value: 1
          },

          applicationMethod: {
            className: "ApplicationMethod",
            method: "all",
            value: 1
          },

          condition: {
            joinType: "AND",
            className: "JoinCondition",
            conditions: []
          }
        },

        condition: {
          joinType: "AND",
          className: "JoinCondition",
          conditions: []
        },

        conditions: [],

        aggregateCondition: {
          joinType: "AND",
          className: "JoinCondition",
          conditions: []
        }
      }
    ]
  }
};