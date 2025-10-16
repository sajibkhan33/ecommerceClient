import { z } from "zod";

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only numbers!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

// Example data structures (for reference only, since JS has no types)
export const ProductExample = {
  id: "1",
  name: "Sample Product",
  shortDescription: "Short desc",
  description: "Full desc",
  price: 100,
  sizes: ["S", "M", "L"],
  colors: ["red", "blue"],
  images: { front: "url1", back: "url2" },
};

export const CartItemExample = {
  ...ProductExample,
  quantity: 1,
  selectedSize: "M",
  selectedColor: "red",
};

// State & actions placeholders
export const CartStoreState = {
  cart: [],
  hasHydrated: false,
};

export const CartStoreActions = {
  addToCart: (product) => {},
  removeFromCart: (product) => {},
  clearCart: () => {},
};
