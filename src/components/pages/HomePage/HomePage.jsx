import Hero from "@/components/Hero/Hero";
import { ROUTES } from "@/constants/routes";
import { useTranslation } from "react-i18next";

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
    </>
  );
};

export default HomePage;
