import type { Card } from "../../app";

export const sortCards = (a: Card, b: Card) => {
  if (a.featured === b.featured) {
    if (a.year.includes("Present") && !b.year.includes("Present")) return -1;
    if (!a.year.includes("Present") && b.year.includes("Present")) return 1;
    return b.year.localeCompare(a.year);
  }
  return a.featured ? -1 : 1;
};
