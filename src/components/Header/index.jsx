import styles from "./header.module.css";
import HeaderImages from "../../images/header_img/header_img";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__info} ${styles.border}`}>
        <div className={styles.header__links}>
          <div className={`${styles.header__links} ${styles.client}`}>
            <a>Частным клиентам</a>
            <a>Для бизнеса</a>
          </div>
          <div className={styles.header__links}>
            <a>О банке</a>
            <a>Офисы</a>
          </div>
        </div>
        <div className={styles.header__contacts}>
          <span className={styles.bold_red}>8 (800) 775-56-06</span>
          <div className={`${styles.header__contacts} ${styles.city}`}>
            <img src={HeaderImages.map} alt="map" />
            <span>Хабаровск</span>
          </div>
          <span>English</span>
        </div>
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__info_nav}>
          <img src={HeaderImages.logo} alt="logo" />
          <div className={styles.header__links}>
            <a>Кредиты</a>
            <a>Вклады</a>
            <a>Обмен валют</a>
            <a>Карты</a>
            <a>Ипотека</a>
            <a>Переводы</a>
            <a>Страхование</a>
            <div className={`${styles.header__contacts} ${styles.city}`}>
              <a>Сервисы</a>
              <img src={HeaderImages.chevron} alt="map" />
            </div>
          </div>
        </div>
        <div className={styles.header__contacts}>
          <div className={`${styles.header__contacts} ${styles.city}`}>
            <img src={HeaderImages.phone} alt="phone" />
            <span className={styles.bold_green}>Заказать звонок</span>
          </div>
          <div className={`${styles.header__contacts} ${styles.city}`}>
            <img src={HeaderImages.login} alt="phone" />
            <span className={styles.bold_red}>Интернет-банк</span>
          </div>
        </div>
      </div>
    </div>
  );
}
