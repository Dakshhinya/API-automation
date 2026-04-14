import { generateBaseOffer } from "../offer/base/offer.base";
import { productOfferDefinition } from "./product-offer.config";
import { generateProduct } from "./product.factory";

export const productOfferScenarios = {

  valid: (buId: number) => ({
    ...generateBaseOffer(buId),

    products: [
      generateProduct()
    ],

  offerDefinition: JSON.parse(JSON.stringify(productOfferDefinition)) 
  }),

  empty: () => ({}),

  missingFields: (buId: number) => {
    const offer = generateBaseOffer(buId);
    delete (offer as any).code;
    delete (offer as any).name;
    return {
      ...offer,
      products: [generateProduct()]
    };
  },

  invalidDiscountValues: (buId: number) => {
    const offer = generateBaseOffer(buId);
    const invalidDefinition = JSON.parse(JSON.stringify(productOfferDefinition));
    invalidDefinition.bucket.buckets[0].discount.value = "-50"; 
    invalidDefinition.bucket.buckets[0].discount.maxDiscount = "INVALID_STRING";

    return {
      ...offer,
      products: [generateProduct()],
      offerDefinition: invalidDefinition
    };
  }

};