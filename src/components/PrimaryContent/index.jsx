import styles from "./primaryContent.module.css";
import MainImages from "../../images/main_img/main_img";

export default function PrimaryContent() {
  return (
    <div>
      <div className={styles.primaryContent__horiz}>
        <div className={styles.primaryContent__horiz_info}>
          <div>
            <div className={styles.primaryContent__horiz_links}>
              <a>Главная</a>
              <img src={MainImages.arrow} alt="arrow" />
              <a>Кредит</a>
              <img src={MainImages.arrow} alt="arrow" />
              <a style={{ color: "rgba(17, 17, 17, 1)" }}>Автокредит</a>
            </div>
            <h1>Автокредит от 7,5% годовых</h1>
            <h2 className={styles.slogan}>
              на покупку авто у дилера или частного лица
            </h2>
            <button className={styles.primaryContent__button}>Оформить</button>
          </div>
          <img
            className={styles.primaryContent__carimg}
            src={MainImages.car}
            alt="car"
          />
        </div>
        <div className={styles.primaryContent__vertical}></div>
        <img
          className={styles.primaryContent__lineimg}
          src={MainImages.line}
          alt="line"
        />
        <img
          className={styles.primaryContent__ellipseimg}
          src={MainImages.ellipse}
          alt="gradient"
        />
      </div>
    </div>
  );
}
