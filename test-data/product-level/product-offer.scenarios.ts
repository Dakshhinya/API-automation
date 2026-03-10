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

  invalidDates: (buId: number) => {
    const offer = generateBaseOffer(buId);
    offer.startDate = new Date(Date.now() + 86400000).toISOString(); 
    offer.endDate = new Date().toISOString(); 
    return {
      ...offer,
      products: [generateProduct()],
      offerDefinition: productOfferDefinition
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