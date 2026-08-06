export type Page = "home" | "over" | "diensten" | "contact";

export type NavigateFn = (page: Page) => void;

export const NAV_ITEMS: { key: Page; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "over", label: "Over mij" },
  { key: "diensten", label: "Diensten" },
  { key: "contact", label: "Contact" },
];
