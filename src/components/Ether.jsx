import PropTypes from "prop-types";

/**
 * @typedef {Object} Program
 * @property {string} title - Название эфира.
 * @property {string} channel - Канал, по которому идет эфир.
 */

/**
 * Компонент Ether для отображения телеэфира.
 *
 * @param {{ data: Program[] }} props - Пропсы компонента.
 * @returns {JSX.Element} Отображаемый компонент.
 */
const Ether = ({ data }) => {
  return (
    <div className="ether">
      <h3>Эфир</h3>
      <ul>
        {data.map((itemObj, index) => (
          <li key={index} className="ether-item">
            <img src="#" alt="Кнопка пуск" />
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

Ether.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Ether;

