import PropTypes from 'prop-types';

/**
 * Компонент GermanyMap, отображающий список популярных разделов.
 * @param {Object} props - Свойства компонента
 * @param {Array<string>} props.data - Список популярных разделов
 * @returns {JSX.Element} Элемент GermanyMap
 */
function GermanyMap({ data }) {
  return (
    <section className="sections">
      <div>Карта Германии</div>
      <ul>
        {data.map((itemObj, index) => (
          <li key={index}>
            <a href={itemObj.linkURL}>{itemObj.item}</a></li>
        ))}
      </ul>
    </section>
  );
}

GermanyMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GermanyMap;
