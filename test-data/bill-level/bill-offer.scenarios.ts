import { billOfferDefinition } from "./bill-offer.config";
import { generateBaseOffer } from "../offer/base/offer.base";

export const billOfferScenarios = {


  valid: (buId: number) => ({
    ...generateBaseOffer(buId),
    offerDefinition: {
      ...billOfferDefinition
    }
  }),

  empty: () => ({}),

};