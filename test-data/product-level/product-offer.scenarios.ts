import { generateBaseOffer } from "../offer/base/offer.base";
import { productOfferDefinition } from "./product-offer.config";
import { generateProduct } from "./product.factory";

export const productOfferScenarios = {

  valid: (buId: number) => ({
    ...generateBaseOffer(buId),

    products: [
      generateProduct()
    ],

    offerDefinition: productOfferDefinition
  }),

  empty: () => ({})

};