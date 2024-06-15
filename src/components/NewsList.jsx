import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

/**
 * Компонент для отображения списка новостей.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Array} props.newsList - Список новостей.
 * @returns {JSX.Element} Элемент списка новостей.
 */
const NewsList = ({ data }) => (
    <div className="news-list">
      {data.map((itemObj, index) => (
        <NewsItem 
          key={index} 
          icon={itemObj.icon} 
          text={itemObj.text} 
          link={itemObj.link} 
        />
      ))}
    </div>
  );
  
  NewsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })).isRequired,
  };
  
  export default NewsList;