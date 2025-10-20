export interface Service {
  id: number;
  title: string;
  price: string;
  features: string[];
  featuresTitle?: string;
  cta?: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}