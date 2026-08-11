export type Page = "home" | "over" | "diensten" | "organisatie" | "contact";

export type NavigateFn = (page: Page) => void;

export const NAV_ITEMS: { key: Page; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "over", label: "Over mij" },
  { key: "diensten", label: "Diensten" },
  { key: "organisatie", label: "Over de organisatie" },
  { key: "contact", label: "Contact" },
];
