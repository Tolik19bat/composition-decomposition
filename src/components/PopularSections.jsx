import PropTypes from "prop-types";

/**
 * Компонент PopularSections, отображающий список популярных разделов.
 * @param {Object} props - Свойства компонента
 * @param {Array<string>} props.data - Список популярных разделов
 * @returns {JSX.Element} Элемент PopularSections
 */
function PopularSections({ data }) {
  return (
    <section className="popular-sections">
      <div>Посещаемое</div>
      <ul>
        {data.map((itemObj, index) => (
          <li key={index}>
            <a href={itemObj.linkURL}>{itemObj.item}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

PopularSections.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PopularSections;
