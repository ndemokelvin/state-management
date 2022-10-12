// name, price, stock_availibility, regions, isItPromo

type Product = {
  name: string;
  price: number;
  stock_availability: number;
  regions: string[];
  isPromo: boolean;
  currency: "kes" | "tzsh";
};

export const product: Product = {
  name: "Ajab baking flour",
  price: 2000,
  stock_availability: 2000,
  regions: ["Nairobi", "Kisumu", "Arusha"],
  isPromo: true,
  currency: "kes",
};
