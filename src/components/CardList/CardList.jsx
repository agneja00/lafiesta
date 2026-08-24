import styles from "./CardList.module.scss";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";

const CardList = ({ items, variant = "outlined", className = "" }) => {
  const { t } = useTranslation();

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
        />
      ))}
    </ul>
  );
};

export default CardList;
