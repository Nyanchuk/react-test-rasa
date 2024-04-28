import styles from "./modal.module.css";
import HeaderImages from "../../images/header_img/header_img";
import { useEffect, useRef, useState } from "react";

export const Modal = ({ closeModal }) => {
  // Стейт для открытия модального окна
  const [openModal, setOpenModal] = useState(false);
  // Для закрытия окна при клике вне окна
  const modalRef = useRef();

  // Закрывает модальное окно при клике за его пределами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__modalContent} ref={modalRef}>
        <div className={styles.modal__modalContent_top}>
          <div className={styles.modal_top}>
            <img src={HeaderImages.logo} />
            <button onClick={closeModal}>
              <img
                className={styles.modal_exit}
                src={HeaderImages.exit}
                alt="exit"
              />
            </button>
          </div>
          <div className={styles.modal_top}>
            <div className={styles.modal_phone}>
              <img src={HeaderImages.phone} alt="exit" />
              <span>8 (800) 775-56-06</span>
            </div>
            <a>Интернет-банк</a>
          </div>
          <div className={styles.modal_top}>
            <div className={styles.modal_phone}>
              <img src={HeaderImages.map} alt="exit" />
              <a>Хабаровск</a>
            </div>
            <img src={HeaderImages.chevron_one} alt="exit" />
          </div>
          <div className={styles.modal_center}>
           <span>Частным клиентам</span>
           <span>Для бизнеса</span>
          </div>
          <div className={styles.modal_bottom}>
           <a>Банковские карты</a>
           <a>Кредиты</a>
           <a>Вклады</a>
           <a>Сейфовые яйчейки</a>
           <a>Открытие счетов</a>
           <a>Обмен валюты</a>
           <a>Переводы</a>
           <a>Условия комплексного банковского обслуживания</a>
          </div>
          <div className={styles.modal_bottom}>
           <a>О банке</a>
          </div>
        </div>
      </div>
      <div className={styles.main_err_plase}></div>
    </div>
  );
};
