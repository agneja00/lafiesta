import Hero from "@/components/Hero/Hero";
import WhatWeCreate from "@/components/sections/WhatWeCreate/WhatWeCreate";
import GalleryPreview from "@/components/sections/GalleryPreview/GalleryPreview";
import WhyLaFiesta from "@/components/sections/WhyLaFiesta/WhyLaFiesta";
import HowToOrder from "@/components/sections/HowToOrder/HowToOrder";
import Contacts from "@/components/sections/Contacts/Contacts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhatWeCreate />
      <GalleryPreview />
      <WhyLaFiesta />
      <HowToOrder />
      <Contacts />
    </>
  );
};

export default HomePage;
