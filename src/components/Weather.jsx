import PropTypes from 'prop-types';
/**
 * Компонент погоды, отображающий информацию о погоде.
 * @param {Object} props - Свойства компонента
 * @param {Object} props.data - Данные о погоде
 * @param {string} props.data.img - Иконка погоды
 * @param {string} props.data.temperature - Текущая температура
 * @param {string} props.data.morning - Температура утром
 * @param {string} props.data.day - Температура днём
 * @returns {JSX.Element} Элемент погоды
 */

function Weather({ data }) {
  return (
    <section className="weather">
      <div>Погода</div>
      <img src={data.img} alt="иконка погоды" />
      <div>{data.temperature}</div>
      <div>Утром {data.morning}</div>
      <div>днём {data.day}</div>
    </section>
  );
}

Weather.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    morning: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
};

export default Weather;
