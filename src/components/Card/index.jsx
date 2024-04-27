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
        <div className={styles.card__images_track}>
        <div className={styles.card__images_item} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {card.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`image ${index}`}
                className={`${styles.cards__images_car} ${
                  index === currentImageIndex ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
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
