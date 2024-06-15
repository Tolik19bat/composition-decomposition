import "./App.css";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import CurrencyRate from "./components/CurrencyRate";
import NewsItemAside from "./components/NewsItemAside";
import NewsTitle from "./components/NewsTitle";
import AdBanner from "./components/AdBanner";
import Weather from "./components/Weather";
import PopularSections from "./components/PopularSections";
import GermanyMap from "./components/GermanyMap";
import TVSchedule from "./components/TVSchedule";
import Ether from "./components/Ether";

function App() {
  const newsTitleData = {
    title: "Сейчас в СМИ в Германии Рекомендуем",
    date: "31 июля,",
    dayOfWeek: "Среда",
    hours: 2,
    minutes: 32,
  };

  const newsListData = [
    {
      icon: "https://example.com/icon1.png",
      text: "Путин упростил получение автомобильных номеров",
      link: "https://example.com/news1",
    },
    {
      icon: "https://example.com/icon2.png",
      text: "В команде Зеленского раскрыли план реформ на Украине",
      link: "https://example.com/news2",
    },
    // Добавить больше новостей по мере необходимости
  ];

  const NewsItemAsideData = {
    iconAside: "https://example.com/icon3.png",
    textAside: "Работа над ошибками",
    linkAside: "https://example.com/newsAside",
    statusAside: "Смотрите на Яндексе и запоминайте",
  };

  const adBannerData = {
    title: "Рекламный баннер",
    description: "Это пример рекламного баннера.",
    imageUrl: "https://example.com/banner.jpg",
    linkUrl: "https://example.com",
  };

  const weatherData = {
    img: "#",
    temperature: "+17",
    morning: "+17",
    day: "+20",
  };

  const PopularSectionsData = [
    {
      item: "Недвижимость - о сталинках",
      linkURL: "https://example.com",
    },
    {
      item: "Маркет - люстры и светильники",
      linkURL: "https://example.com",
    },
    // Добавить больше пунктов по мере необходимости
  ];

  const germanyMapData = [
    {
      item: "Расписания",
      linkURL: "https://example.com",
    },
     // Добавить больше пунктов по мере необходимости
  ]

  const tvScheduleData = [
    {
      time: "02.00",
      title: "THT.Best",
      channel: "THT International",
      channelLinkURL: "https://example.com",
    },
    {
      time: "02.00",
      title: "Джинглики",
      channel: "Карусель INT",
      channelLinkURL: "https://example.com",
    },
    // Добавить больше пунктов по мере необходимости
  ];

  const etherData = [
    {
      title: "Управление как искусство",
      channel: "Успех",
      channelLinkURL: "https://example.com",
    },
    {
      title: "Ночь. Мир в это время",
      channel: "earthTV",
      channelLinkURL: "https://example.com",
    },
    // Добавить больше пунктов по мере необходимости
  ];

  return (
    <>
      <NewsTitle data={newsTitleData} />
      <NewsList data={newsListData} />
      <CurrencyRate currency="USD" exchange="MOEX" rate={63.52} change={0.09} />
      <CurrencyRate currency="EUR" exchange="MOEX" rate={70.68} change={0.14} />
      <CurrencyRate currency="Нефть" exchange="" rate={64.9} change={1.63} />
      <NewsItemAside data={NewsItemAsideData} />
      <Header />
      <AdBanner data={adBannerData} />
      <Weather data={weatherData} />
      <PopularSections data={PopularSectionsData} />
      <GermanyMap data={germanyMapData} />
      <TVSchedule data={tvScheduleData} />
      <Ether data={etherData} />
    </>
  );
}

export default App;
