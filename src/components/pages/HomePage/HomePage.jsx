import Hero from "@/components/Hero/Hero";
import { ROUTES } from "@/constants/routes";
import { useTranslation } from "react-i18next";
import WhatWeCreate from "@/components/sections/WhatWeCreate/WhatWeCreate";
import WhyLaFiesta from "@/components/sections/WhyLaFiesta/WhyLaFiesta";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        buttonText={t("hero.cta")}
        buttonTo={ROUTES.GALLERY}
      />
      <WhatWeCreate />
      <WhyLaFiesta />
    </>
  );
};

export default HomePage;
