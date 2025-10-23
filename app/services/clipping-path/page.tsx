import ImageSlider from "@/app/components/ImageSlider";
import { Service } from "@/app/types";
import ServicePageCard from "../components/ServicePageCard";
import ServicePage from "../components/ServicePage";

export const metadata = {
  title: 'Clipping Path Services - Starting at $0.25 | Renovate Graphics',
  description: 'Get expert Clipping Path Services for flawless product images. We offer accurate background removal, sharp edges, and a 1-hour turnaround, starting from just $0.25 per photo.',
};
export default function ClippingPathServicePage() {
  return (
    <>
      <ServicePage serviceType="clipping-path" />
    </>
  );
}