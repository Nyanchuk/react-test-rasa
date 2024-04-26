import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrimaryContent from "./components/PrimaryContent";
import MainImages from "./images/main_img/main_img";
import Card from "./components/Card";
import { cardsData, cardsDataSeller } from "./data";
import CardSeller from "./components/CardSeller";

function App() {
  const [showAllCards, setShowAllCards] = useState(false);
  const [cards, setCards] = useState([...cardsData]);
  const [cardsCarSeller, setCardsCarSeller] = useState([...cardsDataSeller]);

  useEffect(() => {
    const handleResize = () => {
      setShowAllCards(window.innerWidth >= 770);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowAllCards = () => {
    setShowAllCards(true);
  };

  return (
    <div>
      <Header />
      <PrimaryContent />
      <section className={styles.main}>
        <div className={styles.main__contain}>
          <div className={styles.main__contain_list}>
            <h2>Выберите себе авто</h2>
            <div className={styles.main__contain_button}>
              Свернуть список машин
              <img src={MainImages.chevron} />
            </div>
          </div>
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
          {/* <div className={styles.main__contain_card}>
            {cards.map((card) => (
              <Card key={`card_${card.id}`} card={card} />
            ))}
          </div> */}
          {/* <div className={styles.main__content}>
            {cardsCarSeller
              .slice(0, showAllCards ? cardsCarSeller.length : 6)
              .map((card) => (
                <CardSeller key={`card_${card.id}`} card={card} />
              ))}
          </div> */}
          {/* {!showAllCards && (
            <button
              className={styles.main__cards_check}
              onClick={handleShowAllCards}
            >
              Показать все машины
            </button>
          )} */}
          {/* <div className={styles.main__contein_form}>
            <span>
              Не нашли автомобиль у нас, но нужен автокредит?{" "}
              <a>Перейдите к форме заявки</a>{" "}
            </span>
          </div> */}
          {/* <div className={styles.main__contein_condition}>
            <h2>Общие условия</h2>
            <table>
              <tbody>
                <tr>
                  <td>Срок</td>
                  <td>от 6 месяцев до 6 лет.</td>
                </tr>
                <tr>
                  <td>Сумма</td>
                  <td>от 200 000 до 5 000 000 руб.</td>
                </tr>
                <tr>
                  <td>Годовая процентная ставка:</td>
                  <td>от 7,5 % *.</td>
                </tr>
                <tr>
                  <td>Возможность приобретения авто у частного лица</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className={styles.condition}>
              <a>Смотреть полные условия кредита</a>
              <img src={MainImages.chevronFive} alt="next" />
            </div>
          </div> */}
          {/* <div className={styles.main__contein_questions}>
            <div className={styles.main__contein_block}>
              <img
                style={{ width: "45px" }}
                src={MainImages.questions}
                alt="questions"
              />
              <div className={styles.questions}>Часто задаваемые вопросы</div>
            </div>
            <div className={styles.questions__block}>
              <div>Как подать заявку на автокредит?</div>
              <img src={MainImages.chevron_six} />
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
