export const buildListOfferQuery = (overrides?: Partial<any>) => {
  return {
    buId: overrides?.buId ?? 0,
    page: overrides?.page ?? 0,
    limit: overrides?.limit ?? 10,
    q: overrides?.q ?? "",
    status: overrides?.status ?? "ALL",
    sortBy: overrides?.sortBy ?? "DATE",
    order: overrides?.order ?? "DESC"
  };
};