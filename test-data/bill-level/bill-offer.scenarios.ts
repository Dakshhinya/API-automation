import { billOfferDefinition } from "./bill-offer.config";
import { generateBaseOffer } from "../offer/base/offer.base";
import { buildFixedPriceConditions } from "../../utils/bill-condition.helper";

export const billOfferScenarios = {

  validSingleCondition: (buId: number) => {
    const definition = JSON.parse(JSON.stringify(billOfferDefinition));

  
//      definition.billAggregateCondition.conditions = [
//   {
//     className: "FieldCondition",
//     fieldAccessor: "billAmount",
//     operator: {
//       name: "BETWEEN",
//       className: "Operator",
//       operatorType: "number"
//     },
//     value: "10~1000",
//     billDiscount: {
//       value: "10",
//       className: "Discount"
//     }
//   }
// ];

    return {
      ...generateBaseOffer(buId),
      offerDefinition: definition
    };
  }

};