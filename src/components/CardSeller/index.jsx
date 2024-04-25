import styles from "./cardSeller.module.css";
import MainImages from "../../images/main_img/main_img";
import { useState } from "react";

export default function CardSeller({ card }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={styles.card}>
      <img
        src={card.images[currentImageIndex].src}
        alt={`image ${currentImageIndex}`}
      />
      <h2>{card.title}</h2>
      <div>
        <span>{card.city}</span>
        <div className={styles.card__info_link}>
          <h3>{card.price} ₽</h3>
          <a>Подробнее</a>
        </div>
      </div>
    </div>
  );
}
