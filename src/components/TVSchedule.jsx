import PropTypes from "prop-types";

/**
 * @typedef {Object} Program
 * @property {string} time - Время начала программы.
 * @property {string} title - Название программы.
 * @property {string} channel - Канал, по которому идет программа.
 */

/**
 * Компонент Teleprogramma для отображения телепрограммы.
 *
 * @param {{ data: Program[] }} props - Пропсы компонента.
 * @returns {JSX.Element} Отображаемый компонент.
 */
const TVSchedule = ({ data }) => {
  return (
    <div className="teleprogramma">
      <h3>Телепрограмма</h3>
      <a href="#">
        <img src="#" alt="кнопка Эфир" />
      </a>
      <ul>
        {data.map((itemObj, index) => (
          <li key={index} className="program-item">
            <span className="time">{itemObj.time}</span>
            <span className="title">{itemObj.title}</span>
            <a href={itemObj.channelLinkURL}>
              <span className="channel">{itemObj.channel}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

TVSchedule.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TVSchedule;

