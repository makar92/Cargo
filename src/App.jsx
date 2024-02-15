
import './App.scss';
import About from './components/About/About';
import Carusel from './components/Carusel/Carusel';
import DeliveryOptions from './components/DeliveryOptions/DeliveryOptions';
import Footer from './components/Footer/Footer';
import FormCost from './components/FormCost/FormCost';
import FreqQuestions from './components/FreqQuestions/FreqQuestions';
import Header from './components/Header/Header';
import InfoBlock1 from './components/InfoBlock1/InfoBlock1';
import InfoBlock2 from './components/InfoBlock2/InfoBlock2';
import Servises from './components/Servises/Servises';

const data = [
  {
    title: "Прямое КАРГО из Китая",
    text: "Доставляем любые грузы из Китая по честной цене",
    image: "1sl.jpg",
  },
  {
    title: "Гарантируем сроки!",
    text: "Если мы не уложимся в обозначенные сроки, доставка груза со скидкой до 90%",
    image: "2sl.jpg",
  },
  {
    title: "Выкуп товара с ТаоБао, 1688",
    text: "Выкуп и доставка товаров с китайских торговых площадок. ",
    image: "3sl.jpg",
  },
  {
    title: "Экспресс авто доставка",
    text: "Доставка автотранспортом из Китая в Россию от 15 дней, от $0,5/кг",
    image: "4sl.jpg",
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Carusel />
      <FormCost />
      <InfoBlock1 />
      <DeliveryOptions />
      <Servises />
      <About />
      <FreqQuestions />
      <InfoBlock2 />
      <Footer />
    </div>
  );
}

export default App;
