import PropTypes from 'prop-types';

/**
 * Компонент для отображения отдельной новости.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.icon - URL иконки новости.
 * @param {string} props.text - Текст новости.
 * @param {string} props.link - Ссылка на полную новость.
 * @returns {JSX.Element} Элемент новости.
 */
const NewsItem = ({ icon, text, link }) => (
  <div className="news-item">
    <img src={icon} alt="Иконка источника новости" className="news-icon" />
    <p className="news-text">
      <a href={link} className="news-link">{text}</a>
    </p>
  </div>
);

NewsItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsItem;