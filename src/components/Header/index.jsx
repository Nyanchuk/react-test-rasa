import styles from "./header.module.css";
import HeaderImages from "../../images/header_img/header_img";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";

export default function Header() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 430);
  // Стейт для открытия модального окна
  const [openModal, setOpenModal] = useState(false);
  // Стейт для хранения ошибок
  const [error, setError] = useState("");

  // Открывает модальное окно
  const openModalClick = () => {
    setOpenModal(true);
  };
  // Закрывает модальное окно
  const closeModal = () => {
    setOpenModal(false);
    setError("");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 430);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={`${styles.header__info} ${styles.border}`}>
        <div className={styles.header__links}>
          <div className={`${styles.header__links} ${styles.client}`}>
            <div className={styles.header__block_client}>
              <a>Частным клиентам</a>
            </div>
            <div className={styles.header__block_client}>
              <a>Для бизнеса</a>
            </div>
          </div>
          <div className={styles.header__links_info}>
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
          <div className={styles.header__nav_logo}>
            <img
              className={styles.header__image_logo}
              src={HeaderImages.logo}
              alt="logo"
            />
          </div>
          <div
            className={`${styles.header__links_operation} ${styles.position}`}
          >
            <a>Кредиты</a>
            <a>Вклады</a>
            <a>Обмен валют</a>
            <a>Карты</a>
            <a>Ипотека</a>
            <a>Переводы</a>
            <a>Страхование</a>
            <div className={styles.header__links_more}>
              <a>Ещё</a>
              <img src={HeaderImages.chevron} alt="map" />
            </div>
            <div className={`${styles.header__contacts} ${styles.city}`}>
              <a>Сервисы</a>
              <img src={HeaderImages.chevron} alt="map" />
            </div>
          </div>
        </div>
        <div className={styles.header__block_contacts}>
          <div className={`${styles.header__block_info} ${styles.city}`}>
            <img src={HeaderImages.phone} alt="phone" />
            {isWideScreen ? (
              <span className={styles.bold_green}>Заказать звонок</span>
            ) : (
              <span className={styles.bold_green}>8 800 775-56-06</span>
            )}
          </div>
          <div className={`${styles.header__block_info} ${styles.city}`}>
            <img src={HeaderImages.login} alt="phone" />
            <span className={styles.bold_red}>Интернет-банк</span>
          </div>
          <img
            className={styles.header__block_menu}
            src={HeaderImages.menu}
            alt="menu"
            onClick={openModalClick}
          />
        </div>
      </div>
      {openModal && <Modal closeModal={closeModal} />}
    </div>
  );
}
