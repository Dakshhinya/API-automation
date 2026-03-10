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

  missingFields: (buId: number) => {
    const offer = generateBaseOffer(buId);
    // Remove mandatory name and code
    delete (offer as any).code;
    delete (offer as any).name;
    return {
      ...offer
      // Not attaching offerDefinition either
    };
  },

  invalidDates: (buId: number) => {
    const offer = generateBaseOffer(buId);
    // End date before start date
    offer.startDate = new Date(Date.now() + 86400000).toISOString(); // Tomorrow
    offer.endDate = new Date().toISOString(); // Today
    return {
      ...offer,
      offerDefinition: billOfferDefinition
    };
  },

  invalidDiscountValues: (buId: number) => {
    const offer = generateBaseOffer(buId);
    const invalidDefinition = JSON.parse(JSON.stringify(billOfferDefinition));
    
    // Set invalid discount types 
    invalidDefinition.billDiscount.value = -100; // Negative number
    invalidDefinition.billDiscount.maxDiscount = "NOT_A_NUMBER"; 

    return {
      ...offer,
      offerDefinition: invalidDefinition
    };
  }

};