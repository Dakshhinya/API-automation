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
  startFrom: number = 0
) {
  let currentFrom = startFrom

  return ranges.map(range => {

    const condition = {
      className: "BillValueCondition",
      from: currentFrom,
      to: range.to,
      offerAmount: range.offerAmount
    }

    currentFrom = range.to + 1

    return condition
  })
}


export function buildPercentageConditions(
  ranges: PercentageCondition[],
  startFrom: number = 0
) {

  let currentFrom = startFrom

  return ranges.map(range => {

    const condition = {
      className: "BillValueCondition",
      from: currentFrom,
      to: range.to,
      offerPercentage: range.offerPercentage,
      upto: range.upto
    }

    currentFrom = range.to + 1

    return condition
  })
}