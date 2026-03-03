import { runtimeConfig } from './../config/env';

export const generateOfferPayload = () => {
  const random = Math.floor(Math.random() * 100000);

  return {
    "code": `AUTO_${random}`,
    "tenantBrandBusinessId": 215,
    "name": `auto_${random}`,
    "description": "Des",
    "category_id": null,
    "sortOrder": "0",
    "redemptionLimit": "0",
    "redemptionLimitPerCustomer": "1",
    "startDate": new Date().toISOString(),
    "endDate": new Date(Date.now() + 86400000).toISOString(),
    "type": "Offer",
    "isCustomerSpecific": false,
    "amount": 0,
    "maxLimit": -1,
    "status": 0,
    "remarks": "Remark",
    "eligibility": "BILL_VALUE",
    "metaFields": [],
    "tags": [],
    "imageUrl": "",
    "bannerImageUrl": "",
    "loyaltyVendorInfo": {
        "isInternal": false,
        "allowRedemptionOnPromoItem": false,
        "ginesysProductOffer": false,
        "isGinesysOffer": false
    },
    "products": [],
    "maximumRedemptionAmount": null,
    "maximumRedemptionAmountPerUser": null,
    "offerDefinition": {
        "className": "OfferRule",
        "billCondition": {
            "className": "JoinCondition",
            "conditions": [
                {
                    "className": "FieldCondition",
                    "fieldAccessor": "storeName",
                    "value": [
                        "DBR02"
                    ],
                    "operator": {
                        "className": "Operator",
                        "operatorType": "string",
                        "name": "isIn"
                    }
                }
            ],
            "joinType": "AND"
        },
        "billAggregateCondition": {
            "joinType": "OR",
            "className": "JoinCondition",
            "conditions": [
                {
                    "value": "1~1000",
                    "operator": {
                        "name": "BETWEEN",
                        "className": "Operator",
                        "operatorType": "number"
                    },
                    "className": "FieldCondition",
                    "fieldAccessor": "billAmount",
                    "billDiscount": {
                        "value": "500",
                        "className": "Discount"
                    }
                }
            ]
        },
        "billDiscount": {
            "className": "Discount",
            "discountType": "fixed",
            "maxDiscount": 0,
            "value": 0,
            "offerType": "BILL_VALUE",
            "rule": {
                "className": "DiscountRule",
                "type": "all",
                "value": 1
            },
            "applicationMethod": {
                "className": "ApplicationMethod",
                "method": "all",
                "value": 1
            }
        },
        "bucket": {
            "className": "JoinBucket",
            "bucketId": 1,
            "joinType": "AND",
            "buckets": []
        }
    },
    "categoryId": null,
    "offerRules": null
  };
};