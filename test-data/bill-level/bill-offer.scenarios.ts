import { billOfferDefinition } from "./bill-offer.config";
import { generateBaseOffer } from "../offer/base/offer.base";
import { buildFixedPriceConditions } from "../../utils/bill-condition.helper";
import { buildPercentageConditions } from "../../utils/bill-condition.helper"

export const billOfferScenarios = {

  validSingleCondition: (buId: number) => {

  const conditions = [
    {
      className: "BillValueCondition",
      from: 0,
      to: 1000,
      offerAmount: 100
    }
  ];

  return {
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,

      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions
      },

      billDiscount: {
        ...billOfferDefinition.billDiscount,
        value: 100,
        maxDiscount: 100
      }

    }

  };
},

  validMultipleConditions: (buId: number) => ({
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,
      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions: buildFixedPriceConditions([
          { to: 1000, offerAmount: 100 },
          { to: 2000, offerAmount: 200 },
          { to: 5000, offerAmount: 400 }
        ])
      }
    }
  }),

  emptyPayload: () => ({}),

  invalidRange: (buId: number) => ({
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,
      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions: [
          {
            className: "BillValueCondition",
            from: 1000,
            to: 500,
            offerAmount: 100
          }
        ]
      }
    }
  }),

  overlappingRange: (buId: number) => ({
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,
      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions: [
          {
            className: "BillValueCondition",
            from: 0,
            to: 1000,
            offerAmount: 100
          },
          {
            className: "BillValueCondition",
            from: 900,
            to: 2000,
            offerAmount: 200
          }
        ]
      }
    }
  }),

  missingOfferAmount: (buId: number) => ({
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,
      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions: [
          {
            className: "BillValueCondition",
            from: 0,
            to: 1000
          }
        ]
      }
    }
  }),

  negativeOfferAmount: (buId: number) => ({
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,
      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions: [
          {
            className: "BillValueCondition",
            from: 0,
            to: 1000,
            offerAmount: -50
          }
        ]
      }
    }
  }),

  validPercentage: (buId: number) => {

  const conditions = buildPercentageConditions([
    { to: 1000, offerPercentage: 10, upto: 100 },
    { to: 2000, offerPercentage: 15, upto: 200 }
  ])

  return {
    ...generateBaseOffer(buId),

    offerDefinition: {
      ...billOfferDefinition,

      billDiscount: {
        ...billOfferDefinition.billDiscount,
        discountType: "percentage"
      },

      billCondition: {
        ...billOfferDefinition.billCondition,
        conditions
      }
    }
  }
},
invalidPercentage: (buId:number)=>({

  ...generateBaseOffer(buId),

  offerDefinition:{
    ...billOfferDefinition,

    billDiscount:{
      ...billOfferDefinition.billDiscount,
      discountType:"percentage"
    },

    billCondition:{
      ...billOfferDefinition.billCondition,
      conditions:[
        {
          className:"BillValueCondition",
          from:0,
          to:1000,
          offerPercentage:150,
          upto:100
        }
      ]
    }
  }

}),
missingUpto:(buId:number)=>({

  ...generateBaseOffer(buId),

  offerDefinition:{
    ...billOfferDefinition,

    billDiscount:{
      ...billOfferDefinition.billDiscount,
      discountType:"percentage"
    },

    billCondition:{
      ...billOfferDefinition.billCondition,
      conditions:[
        {
          className:"BillValueCondition",
          from:0,
          to:1000,
          offerPercentage:10
        }
      ]
    }
  }

}),
negativePercentage:(buId:number)=>({

  ...generateBaseOffer(buId),

  offerDefinition:{
    ...billOfferDefinition,

    billDiscount:{
      ...billOfferDefinition.billDiscount,
      discountType:"percentage"
    },

    billCondition:{
      ...billOfferDefinition.billCondition,
      conditions:[
        {
          className:"BillValueCondition",
          from:0,
          to:1000,
          offerPercentage:-5,
          upto:100
        }
      ]
    }
  }

})

};