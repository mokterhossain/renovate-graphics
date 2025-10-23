import ImageSlider from "@/app/components/ImageSlider";
import ServicePageCard from "../components/ServicePageCard";
import { Service, ServiceData, Slide } from "@/app/types";
import { servicesData } from "@/app/data/servicesData";

interface ServicePageProps {
    serviceType: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceType }: ServicePageProps) => {
    const serviceData: ServiceData | undefined = servicesData.find(
        (data) => data.serviceType === serviceType
    );
    if (!serviceData) {
        return <div className="container">Service not found</div>;
    }
    return (
        <>
        <ImageSlider slides={serviceData.slides} />
      <section className="section">
        <div className="container">
          <h2 className="text-2xl text-center text-gray-900">
            {serviceData.serviceTitle}
          </h2>
          <p className="paragraph text-left mt-6 sm:text-lg text-gray-700">
            {serviceData.serviceDescription}    
          </p>
        </div>
      </section>
      <section id="services" className="bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl text-center text-gray-900 mb-10">
            {serviceData.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceData.services.map((service) => (
              <ServicePageCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      </>
    );
}
export default ServicePage;