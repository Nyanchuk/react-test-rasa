import { useState } from "react";
import styles from "./app.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrimaryContent from "./components/PrimaryContent";
import MainImages from "./images/main_img/main_img";
import Card from "./components/Card";
import cardsData from "./data";

function App() {
  const [cards, setCards] = useState([...cardsData]);

  return (
    <div>
      <Header />
      <PrimaryContent />
      <section className={styles.main}>
        <div className={styles.main__contain}>
          {/* ПЕРВЫЙ */}
          <div className={styles.main__contain_list}>
            <h2>Выберите себе авто</h2>
            <div className={styles.main__contain_button}>
              Свернуть список машин
              <img src={MainImages.chevron} />
            </div>
          </div>
          {/* ВТОРОЙ */}
          <div className={styles.main__contain_search}>
            <div className={styles.main__contain_stamp}>
              <span>Марка</span>
              <div className={styles.main__contain_input}>
                <input placeholder="Выбрать"></input>
                <img src={MainImages.chevron_two} />
              </div>
            </div>
            <div
              className={`${styles.main__contain_stamp} ${styles.years_stamp}`}
            >
              <span>Год</span>
              <div className={`${styles.main__contain_input} ${styles.years}`}>
                <input placeholder="Выбрать"></input>
                <img src={MainImages.chevron_two} />
              </div>
            </div>
            <div className={styles.main__contain_prises}>
              <span>Цена</span>
              <div className={styles.main__contain_prise}>
                <input placeholder="От"></input>
                <img src={MainImages.vector} />
                <input placeholder="До"></input>
              </div>
            </div>
          </div>
          {/* ТРЕТИЙ*/}
          <div>
            {cards.map((card) => (
              <Card key={`card_${card.id}`} card={card} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
