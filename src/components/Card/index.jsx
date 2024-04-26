import styles from "./card.module.css";
import MainImages from "../../images/main_img/main_img";
import { useState } from "react";

export default function Card({ card }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <span>Лучшее предложение</span>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <h3>От {card.price} ₽</h3>
        <div className={styles.card__info_link}>
          <a>Подробнее</a>
          <img src={MainImages.arrowTwo} />
        </div>
      </div>
      <div className={styles.card__images}>
        <img
          className={styles.card__images_arrow}
          src={MainImages.chevronFore}
          alt="prev image"
          onClick={prevImage}
        />
        <img
          src={card.images[currentImageIndex].src}
          alt={`image ${currentImageIndex}`}
          className={styles.cards__images_car}
        />
        <img
          className={styles.card__images_arrow}
          src={MainImages.chevronThree}
          alt="next image"
          onClick={nextImage}
        />
      </div>
    </div>
  );
}
