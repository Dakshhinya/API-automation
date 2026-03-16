export function generateOfferDates(daysValid: number = 7) {
  const from = new Date();
  const to = new Date();

  to.setDate(from.getDate() + daysValid);

  return {
    from: from.toISOString(),
    to: to.toISOString()
  };
}