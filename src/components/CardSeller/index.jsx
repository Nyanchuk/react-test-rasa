import styles from "./cardSeller.module.css";
import { useState } from "react";

export default function CardSeller({ card }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={styles.card}>
      <a href="#">
        <img
          src={card.images[currentImageIndex].src}
          alt={`image ${currentImageIndex}`}
        />
      </a>
      <a href="#" className={styles.card__info_link}>{card.title}</a>
      <div>
        <span>{card.city}</span>
        <div className={styles.card__info_link}>
          <h3>{card.price} ₽</h3>
          <a href="#">Подробнее</a>
        </div>
      </div>
    </div>
  );
}
