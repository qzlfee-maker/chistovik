export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

export type Price = {
  service: string;
  price: string;
  note?: string;
};

export type Review = {
  name: string;
  text: string;
  service: string;
  screenshot?: string;
  caption?: string;
};
