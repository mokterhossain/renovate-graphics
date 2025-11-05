'use client';

import BeforeAfterSlider from "./BeforeAfterSlider";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "./Button";
import { Service } from "../types";
import BeforeAfterImageSlider from "./BeforeAfterImageSlider";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-gray-100 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 lg:w-1/2">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
        {/* Price */}
        <p className="text-indigo-600 font-semibold mb-4">Starting at {service.price}</p>
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>
       {/* Features Title */}
      {service.featuresTitle && (
        <p className="font-medium text-gray-800 mb-2">{service.featuresTitle}</p>
      )}
        
        <ul className="space-y-2 pl-2">
  {service.features.map((feature, index) => (
    <li key={index} className="flex items-start text-gray-700">
      <CheckCircle className="w-4 h-4 text-indigo-500 mt-1 mr-2 flex-shrink-0" />
      <span>{feature}</span>
    </li>
  ))}
</ul>
{/* CTA */}
      {service.cta && (
        <p className="mt-4 text-gray-800 font-medium">{service.cta}</p>
      )}
<div className="flex justify-center my-8 gap-4">
        <Button variant="outline" width="fixed" href="/services">
  View Services
</Button>
<Button variant="gradient" width="fixed" href="/services">
  Get a Quote
</Button>
</div>
      </div>
      <div className="flex-1 lg:w-1/2">
       <BeforeAfterImageSlider
          beforeImage={service.beforeImage}
          afterImage={service.afterImage}
          title={service.title}
        />
      {/* <BeforeAfterSlider
        beforeImage={service.beforeImage}
        afterImage={service.afterImage}
        title={service.title}
      /> */}
      </div>
    </div>
  );
};

export default ServiceCard;