import styles from "./header.module.css";
import map from "../../images/header_img/location.svg";
import logo from "../../images/header_img/Logo.svg";
import chevron from "../../images/header_img/chevron.svg";
import phone from "../../images/header_img/Phone.svg";
import login from "../../images/header_img/login.svg";

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
            <img src={map} alt="map" />
            <span>Хабаровск</span>
          </div>
          <span>English</span>
        </div>
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__info_nav}>
          <img src={logo} alt="logo" />
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
              <img src={chevron} alt="map" />
            </div>
          </div>
        </div>
        <div className={styles.header__contacts}>
          <div className={`${styles.header__contacts} ${styles.city}`}>
            <img src={phone} alt="phone" />
            <span className={styles.bold_green}>Заказать звонок</span>
          </div>
          <div className={`${styles.header__contacts} ${styles.city}`}>
            <img src={login} alt="phone" />
            <span className={styles.bold_red}>Интернет-банк</span>
          </div>
        </div>
      </div>
    </div>
  );
}
