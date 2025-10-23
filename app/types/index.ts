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

export interface Slide {
    id: number;
    image: string;
    mobileImage: string;
}

export interface ServiceData {
    serviceType: string;
    serviceTitle: string;
    serviceDescription?: string;
    featuresTitle?: string;
    slides: Slide[];
    services: Service[];
}