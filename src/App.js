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
  const [isCarListExpanded, setIsCarListExpanded] = useState(true);
  const [isSubmitApplication, setSubmitApplication] = useState(false);
  const [cards, setCards] = useState([...cardsData]);
  const [cardsCarSeller, setCardsCarSeller] = useState([...cardsDataSeller]);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 770);
  const [maxCardsToShow, setMaxCardsToShow] = useState(
    window.innerWidth < 430 ? 3 : 6
  );
  const [isOpenStamp, setIsOpenStamp] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState("");
  const [isOpenStampYears, setIsOpenYears] = useState(false);
  const [selectedYears, setSelectedYears] = useState("");

  const toggleDropdown = () => {
    setIsOpenStamp(!isOpenStamp);
  };
  const handleItemClick = (item) => {
    setSelectedStamp(item);
    setIsOpenStamp(false);
  };
  const toggleDropdownYears = () => {
    setIsOpenYears(!isOpenStampYears);
  };
  const handleItemClickYears = (item) => {
    setSelectedYears(item);
    setIsOpenYears(false);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setShowAllCards(window.innerWidth >= 770);
  //     setMaxCardsToShow(window.innerWidth < 430 ? 3 : 6);
  //   };
  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 770);
      setMaxCardsToShow(window.innerWidth < 430 ? 3 : 6);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const handleShowAllCards = () => {
  //   setShowAllCards(true);
  // };
  const handleShowAllCards = () => {
    if (!isWideScreen) {
      setIsWideScreen(true);
    }
  };

  return (
    <div>
      <Header />
      <PrimaryContent />
      <section className={styles.main}>
        <div className={styles.main__contain}>
          <div className={styles.main__contain_list}>
            <h2>Выберите себе авто</h2>
            <div
              className={styles.main__contain_button}
              onClick={() => setIsCarListExpanded(!isCarListExpanded)}
            >
              {isCarListExpanded
                ? "Свернуть список машин"
                : "Показать список машин"}
              <img
                className={`${styles.main__contain_img} ${
                  isCarListExpanded ? styles.rotate : ""
                }`}
                src={MainImages.chevron}
                alt="more"
              />
            </div>
          </div>
          <div className={styles.main__contain_search}>
            <div className={styles.main__block_search}>
              <div className={styles.main__contain_stamp}>
                <span>Марка</span>
                <div className={styles.main__contain_input}>
                  <input
                    placeholder="Выбрать"
                    value={selectedStamp}
                    onChange={(e) => setSelectedStamp(e.target.value)}
                  ></input>
                  <img
                    className={`${styles.main__contain_img} ${
                      isOpenStamp ? styles.rotate : ""
                    }`}
                    onClick={toggleDropdown}
                    src={MainImages.chevron_two}
                  />
                </div>
                {isOpenStamp && (
                  <div className={styles.dropdown__stamp}>
                    <div className={styles.dropdown}>
                      <ul className={styles.dropdownList}>
                        {[
                          ...new Set(cardsCarSeller.map((card) => card.title)),
                        ].map((title) => (
                          <li
                            key={title}
                            onClick={() => handleItemClick(title)}
                          >
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.main__contain_years}>
                <span>Год</span>
                <div className={styles.main__input_years}>
                  <input
                    placeholder="Выбрать"
                    value={selectedYears}
                    onChange={(e) => setSelectedYears(e.target.value)}
                  ></input>
                  <img
                    src={MainImages.chevron_two}
                    className={`${styles.main__contain_img} ${
                      isOpenStampYears ? styles.rotate : ""
                    }`}
                    onClick={toggleDropdownYears}
                  />
                </div>
                {isOpenStampYears && (
                  <div className={styles.dropdown__stamp}>
                    <div className={styles.dropdown}>
                      <ul className={styles.dropdownList}>
                        {[
                          ...new Set(cardsCarSeller.map((card) => card.year)),
                        ].map((year) => (
                          <li
                            key={year}
                            onClick={() => handleItemClickYears(year)}
                          >
                            {year}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
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
          {isCarListExpanded && (
            <div
              className={`${styles.main__contain_card} ${
                isCarListExpanded ? styles.show : ""
              }`}
            >
              {cards.map((card) => (
                <Card key={`card_${card.id}`} card={card} />
              ))}
              <div className={styles.main__content}>
                {cardsCarSeller
                  .slice(
                    0,
                    isWideScreen ? cardsCarSeller.length : maxCardsToShow
                  )
                  .map((card) => (
                    <CardSeller key={`card_${card.id}`} card={card} />
                  ))}
              </div>
              {!isWideScreen && (
            <button
              className={styles.main__cards_check}
              onClick={handleShowAllCards}
            >
              Показать все машины
            </button>
          )}
              {/* {!showAllCards && (
                <button
                  className={styles.main__cards_check}
                  onClick={handleShowAllCards}
                >
                  Показать все машины
                </button>
              )} */}
            </div>
          )}
          <div className={styles.main__contein_form}>
            <span>
              Не нашли автомобиль у нас, но нужен автокредит?{" "}
              <a>Перейдите к форме заявки</a>{" "}
            </span>
          </div>
          <div className={styles.main__contein_condition}>
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
          </div>
          <div className={styles.main__contein_questions}>
            <div className={styles.main__contein_block}>
              <img
                style={{ width: "45px" }}
                src={MainImages.questions}
                alt="questions"
              />
              <div className={styles.questions}>Часто задаваемые вопросы</div>
            </div>
            <div>
              <div
                onClick={() => setSubmitApplication(!isSubmitApplication)}
                className={styles.questions__block}
              >
                <div>Как подать заявку на автокредит?</div>
                <img
                  className={`${styles.main__contain_img} ${
                    isSubmitApplication ? styles.rotate : ""
                  }`}
                  src={MainImages.chevron_six}
                />
              </div>
              {isSubmitApplication && (
                <div
                  className={`${styles.answer} ${
                    isSubmitApplication && styles.show
                  }`}
                >
                  Здесь будет ответ на вопрос как подать заявку на кредит
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
