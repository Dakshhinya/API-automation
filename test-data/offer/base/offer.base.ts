import { fakerEN as faker } from "@faker-js/faker";

export const generateBaseOffer = (buId: number) => ({
  // type: "Offer",
  code: faker.string.alpha({ length: 6, casing: "upper" }),
  tenantBrandBusinessId: buId,
  name: `${faker.commerce.product()} Offer`,
  description: "Automation Offer",
  sortOrder: "0",
  redemptionLimit: "0",
  redemptionLimitPerCustomer: "0",
  startDate: new Date().toISOString(),
  endDate: new Date(Date.now() + 86400000).toISOString(),
  status: 0,
  remarks: "",
  imageUrl: "",
  bannerImageUrl: "",
  tags: [],
  metaFields: [],
  loyaltyVendorInfo: {
    isInternal: false,
    allowRedemptionOnPromoItem: false,
    ginesysProductOffer: false,
    isGinesysOffer: false
  }
});