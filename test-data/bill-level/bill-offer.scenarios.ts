import { billOfferDefinition } from "./bill-offer.config";
import { generateBaseOffer } from "../offer/base/offer.base";
import { buildFixedPriceConditions, buildPercentageConditions } from "../../utils/bill-condition.helper";

export const billOfferScenarios = {

  validSingleCondition: (buId: number) => {
    const definition = JSON.parse(JSON.stringify(billOfferDefinition));

  
     definition.billAggregateCondition.conditions = [
  {
    className: "FieldCondition",
    fieldAccessor: "billAmount",
    operator: {
      name: "BETWEEN",
      className: "Operator",
      operatorType: "number"
    },
    value: "10~1000",
    billDiscount: {
      value: "10",
      className: "Discount"
    }
  }
];

    return {
      ...generateBaseOffer(buId),
      offerDefinition: definition
    };
  },


  validMultipleConditions: (buId: number) => {
  const definition = JSON.parse(JSON.stringify(billOfferDefinition));
  definition.billAggregateCondition.conditions = buildFixedPriceConditions([
    { to: 1000, offerAmount: 500 },
    { to: 2500, offerAmount: 1000 },
    { to: 5000, offerAmount: 1200 }
  ]);
  return {
    ...generateBaseOffer(buId),
    offerDefinition: definition
  };
},

invalidRange: (buId: number) => {
  const definition = JSON.parse(JSON.stringify(billOfferDefinition));
  definition.billAggregateCondition.conditions = [
    {
      className: "FieldCondition",
      fieldAccessor: "billAmount",
      operator: {
        name: "BETWEEN",
        className: "Operator",
        operatorType: "number"
      },
      value: "1000~100",
      billDiscount: {
        value: "500",
        className: "Discount"
      }
    }
  ];
  return {
    ...generateBaseOffer(buId),
    offerDefinition: definition
  };
},
duplicateCode: (buId: number, code: string) => {
  const definition = JSON.parse(JSON.stringify(billOfferDefinition));

  definition.billAggregateCondition.conditions = [
    {
      className: "FieldCondition",
      fieldAccessor: "billAmount",
      operator: {
        name: "BETWEEN",
        className: "Operator",
        operatorType: "number"
      },
      value: "10~1000",
      billDiscount: {
        value: "10",
        className: "Discount"
      }
    }
  ];

  return {
    ...generateBaseOffer(buId),
    code, // 🔥 SAME CODE
    offerDefinition: definition
  };
},

//------------bill-level (PERCENTAGE)--------------------------------
validPercentage: (buId: number) => {
  const definition = JSON.parse(JSON.stringify(billOfferDefinition));
  definition.billDiscount.discountType = "percent";
  definition.billDiscount.value = 0
  definition.billAggregateCondition.conditions = buildPercentageConditions([
    { to: 100, offerPercentage: 10, upto: 100 },
    { to: 500, offerPercentage: 20, upto: 200 },
    { to: 1000, offerPercentage: 30, upto: 300 }
  ]);

  return {
    ...generateBaseOffer(buId),
    offerDefinition: definition
  };
}

};