export type FixedCondition = {
  to: number
  offerAmount: number
}

export type PercentageCondition = {
  to: number
  offerPercentage: number
  upto: number
}

export function buildFixedPriceConditions(
  ranges: FixedCondition[],
  startFrom: number = 1
) {
  let currentFrom = startFrom;
  return ranges.map(range => {
    const condition = {
      className: "FieldCondition",
      fieldAccessor: "billAmount",
      operator: {
        name: "BETWEEN",
        className: "Operator",
        operatorType: "number"
      },
      value: `${currentFrom}~${range.to}`,
      billDiscount: {
        className: "Discount",
        value: String(range.offerAmount)
      }
    };
    currentFrom = range.to + 1;

    return condition;
  });
}

export function buildPercentageConditions(
  ranges: PercentageCondition[],
  startFrom: number = 1
) {
  let currentFrom = startFrom;

  return ranges.map(range => {
    const condition = {
      className: "FieldCondition",
      fieldAccessor: "billAmount",
      operator: {
        name: "BETWEEN",
        className: "Operator",
        operatorType: "number"
      },
      value: `${currentFrom}~${range.to}`,
      billDiscount: {
        className: "Discount",
        value: String(range.offerPercentage),
        maxDiscount: range.upto
      }
    };
    currentFrom = range.to + 1;
    return condition;
  });
}
