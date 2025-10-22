import BeforeAfterImageSlider from "@/app/components/BeforeAfterImageSlider";
import { Service } from "@/app/types";

interface ServiceCardProps {
  service: Service;
}

const ServicePageCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-8">
      <div className="flex-1">
        <p className="text-indigo-600 font-semibold mb-4">Starting at {service.price}</p>
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>
      </div>
      <div className="flex-1">
        <BeforeAfterImageSlider
          beforeImage={service.beforeImage}
          afterImage={service.afterImage}
          title={service.title}
        />
      </div>
    </div>
  );
};

export default ServicePageCard;