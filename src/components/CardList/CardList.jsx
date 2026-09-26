import styles from "./CardList.module.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { buildTo } from "@/utils/navigation";
import Card from "../Card/Card";

const CardList = ({ items, variant = "outlined", className = "" }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const classes = [styles.list, styles[variant], className].filter(Boolean).join(" ");

  return (
    <ul className={classes}>
      {items.map((item) => (
        <Card
          key={item.id}
          icon={item.icon}
          title={t(item.titleKey)}
          description={t(item.descriptionKey)}
          variant={variant}
          to={item.to !== undefined ? buildTo(item, lang) : undefined}
        />
      ))}
    </ul>
  );
};

export default CardList;
