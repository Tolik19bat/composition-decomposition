import PropTypes from "prop-types";

/**
 * Компонент для отображения отдельной новости в стороне.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Object} props.newsDataAside - Объект данных новости.
 * @param {string} props.newsDataAside.iconAside - URL иконки новости.
 * @param {string} props.newsDataAside.textAside - Текст новости.
 * @param {string} props.newsDataAside.linkAside - Ссылка на полную новость.
 * @param {string} props.newsDataAside.statusAside - Текст статуса под ссылкой.
 * @returns {JSX.Element} Элемент новости.
 */
const NewsItemAside = ({ data }) => (
  <div className="news-item-aside">
    <img src={data.iconAside} alt="News Icon" className="news-icon-aside" />
    <p className="news-text-aside">{data.textAside}</p>
    <a href={data.linkAside} className="news-link-aside">
      {data.statusAside}
    </a>
  </div>
);

NewsItemAside.propTypes = {
  data: PropTypes.shape({
    iconAside: PropTypes.string.isRequired,
    textAside: PropTypes.string.isRequired,
    linkAside: PropTypes.string.isRequired,
    statusAside: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsItemAside;
