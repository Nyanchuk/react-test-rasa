import styles from "./app.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrimaryContent from "./components/PrimaryContent";

function App() {
  return (
    <div>
      <Header />
      <PrimaryContent />
      <Footer />
    </div>
  );
}

export default App;
