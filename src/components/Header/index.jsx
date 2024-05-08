import styles from "./header.module.css";
import HeaderImages from "../../images/header_img/header_img";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";

export default function Header() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 430);
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openModalClick = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
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

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openModal]);

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
            <div onClick={toggleDropdown} className={styles.header__links_more}>
              <a>Ещё</a>
              <img src={HeaderImages.chevron} alt="map" />
              {isOpen && (
                <div className={styles.dropdownContent}>
                  <a>Интернет-банк</a>
                  <a>Монеты</a>
                  <a>Сейфовые яйчейки</a>
                  <div className={styles.mobile__mobile}>
                    <a>Карты</a>
                    <a>Ипотека</a>
                    <a>Переводы</a>
                    <a>Страхование</a>
                  </div>
                  <div className={styles.mobile__table}>
                    <a>Страхование</a>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={toggleDropdown}
              className={`${styles.header__contacts} ${styles.city}`}
            >
              <a>Сервисы</a>
              <img src={HeaderImages.chevron} alt="map" />
              {isOpen && (
                <div className={styles.dropdownContent}>
                  <a>Интернет-банк</a>
                  <a>Монеты</a>
                  <a>Сейфовые яйчейки</a>
                </div>
              )}
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
