import PropTypes from "prop-types";

/**
 * Компонент для отображения заголовка с датой и временем.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Object} props.data - Объект с данными для заголовка.
 * @param {string} props.data.title - Заголовок.
 * @param {string} props.data.date - Дата.
 * @param {string} props.data.dayOfWeek - День недели.
 * @param {number} props.data.hours - Часы.
 * @param {number} props.data.minutes - Минуты.
 * @returns {JSX.Element} Элемент заголовка с датой и временем.
 */
const NewsTitle = ({ data }) => (
  <div className="title-component">
    <h3>{data.title}</h3>
    <p>{data.date}</p>
    <p>{data.dayOfWeek}</p>
    <p>
      {data.hours < 10 ? `0${data.hours}` : data.hours} :
      {data.minutes < 10 ? `0${data.minutes}` : data.minutes}
    </p>
  </div>
);

NewsTitle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
  }).isRequired,
};

export default NewsTitle;
