import ImageSlider from "@/app/components/ImageSlider";
import ServicePage from "../components/ServicePage";

const slides = [
  { id: 1, image: "/images/slider/web/slide1.jpg", mobileImage: "/images/slider/mobile/slide1.jpg" },
  { id: 2, image: "/images/slider/web/slide2.jpg", mobileImage: "/images/slider/mobile/slide2.jpg" },
  { id: 3, image: "/images/slider/web/slide3.jpg", mobileImage: "/images/slider/mobile/slide3.jpg" },
  { id: 4, image: "/images/slider/web/slide4.jpg", mobileImage: "/images/slider/mobile/slide4.jpg" },
  { id: 5, image: "/images/slider/web/slide5.jpg", mobileImage: "/images/slider/mobile/slide5.jpg" },
  { id: 6, image: "/images/slider/web/slide6.jpg", mobileImage: "/images/slider/mobile/slide6.jpg" },
  { id: 7, image: "/images/slider/web/slide7.jpg", mobileImage: "/images/slider/mobile/slide7.jpg" },
  { id: 8, image: "/images/slider/web/slide8.jpg", mobileImage: "/images/slider/mobile/slide8.jpg" },
  { id: 9, image: "/images/slider/web/slide9.jpg", mobileImage: "/images/slider/mobile/slide9.jpg" },
  { id: 10, image: "/images/slider/web/slide10.jpg", mobileImage: "/images/slider/mobile/slide10.jpg" },
  { id: 11, image: "/images/slider/web/slide11.jpg", mobileImage: "/images/slider/mobile/slide11.jpg" },
];
export default function JewelleryEditing(){
    return(
        <>
          <ServicePage serviceType="jewellery-editing" />
        </>
    )
}