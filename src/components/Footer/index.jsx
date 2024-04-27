import styles from "./footer.module.css";
import FooterImages from "../../images/footer_img/footer_img";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_links}>
          <div className={styles.footer__container_block}>
            <div className={styles.footer__container_mobile}>
              <span>Частным лицам</span>
              <img src={FooterImages.chevron} alt="more" />
            </div>
            <a>Банковские счета</a>
            <a>Кредиты</a>
            <a>Вклады</a>
            <a>Ипотека</a>
            <a>Страхование</a>
            <a>Сейфовые яйчейки</a>
            <a>Открытие счетов</a>
            <a>Обмен валюты</a>
            <a>Переводы</a>
            <a>Маркетплейс</a>
          </div>
          <div className={styles.footer__container_block}>
            <div className={styles.footer__container_mobile}>
              <span>Бизнесу</span>
              <img src={FooterImages.chevron} alt="more" />
            </div>
            <a>Експресс-МСБ</a>
            <a>Расчетно-кассовое обслуживание</a>
            <a>Онлайн резервирование счета</a>
            <a>Внешнеэкономическая деятельность</a>
            <a>Зарплатный проект</a>
            <a>Овердрафт</a>
            <a>Кредит</a>
            <a>Лизинг</a>
            <a>Депозиты</a>
            <a>Банковские гарантии</a>
            <a>Факторинг</a>
          </div>
          <div className={styles.footer__container_block}>
            <div className={styles.footer__container_mobile}>
              <span>О банке</span>
              <img src={FooterImages.chevron} alt="more" />
            </div>
            <a>Новости</a>
            <a>Вакансии</a>
            <a>Офисы</a>
            <a>Инвестиционные услуги</a>
            <a>О банке</a>
            <a>Реквизиты</a>
            <a>Тарифы</a>
            <a>Монеты</a>
            <a>Непрофильные активы</a>
          </div>
          <div
            className={`${styles.footer__container_block} ${styles.footer__mobile}`}
          >
            <div className={styles.footer__container_mobile}>
              <span>Дополнительные пункты</span>
              <img src={FooterImages.chevron} alt="more" />
            </div>
          </div>
        </div>
        <div className={styles.footer__container_contacts}>
          <div className={styles.footer__container_num}>
            <span className={styles.num}>8 800 775-56-06</span>
            <span className={styles.info}>
              Для звонков по России (бесплатно)
            </span>
          </div>
          <div className={styles.footer__container_num}>
            <span className={styles.num}>+7 495 232-37-23</span>
            <span className={styles.info}>
              Для блокировки карт (круглосуточно)
            </span>
          </div>
          <div className={styles.message}>
            <img src={FooterImages.telegram} alt="telegram" />
            <img src={FooterImages.vk} alt="vk" />
            <img src={FooterImages.ok} alt="ok" />
            <img src={FooterImages.twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className={styles.footer__block}>
        <a>FATСA</a>
        <a>Страхование и другие услуги НФО</a>
        <a>
          Общие условия предоставления банковских гарантий в АО «Солид Банк»
        </a>
        <a>Памятки по финансовой безопасности</a>
        <a>Обеспечение защиты прав потребителей финансовых услуг</a>
        <a>
          Методика определения справедливой стоимости финансовых инструментов
        </a>
        <a>Политика в отношении обработки персональных данных</a>
        <a>Лица, ответственные за сведения на сайте</a>
        <a>Аудиторская компания</a>
        <a>Надзорные органы</a>
        <a>
          Информация о процентных ставках по договорам банковского вклада с
          физическими лицами
        </a>
        <a>
          Информация, связанная с совершением Банком действий, предусмотренных
          пунктом 5.6 статьи 7 ФЗ N 115
        </a>
      </div>
      <div className={styles.footer__end}>
        <span>
          © 2004-2021, АО «Солид Банк» , официальный сайт, генеральная лицензия
          ЦБ РФ № 1329.
        </span>
        <span>
          Разработка сайта -{" "}
          <span style={{ color: "#009EE2", paddingBottom: "24px" }}>RASA</span>
        </span>
      </div>
    </div>
  );
}
