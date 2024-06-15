import PropTypes from 'prop-types';

/**
 * Компонент рекламного баннера.
 *
 * @component
 * @example
 * const data = {
 *   title: "Рекламный баннер",
 *   description: "Это пример рекламного баннера.",
 *   imageUrl: "https://example.com/banner.jpg",
 *   linkUrl: "https://example.com"
 * };
 * return <AdBanner data={AdBannerData} />;
 */
const AdBanner = ({ data }) => {
  return (
    <div className="ad-banner">
      <a href={data.linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={data.imageUrl} alt={data.title} className="ad-banner__image" />
        <div className="ad-banner__content">
          <h2 className="ad-banner__title">{data.title}</h2>
          <p className="ad-banner__description">{data.description}</p>
        </div>
      </a>
    </div>
  );
};

AdBanner.propTypes = {
  /**
   * Объект с данными для баннера.
   */
  data: PropTypes.shape({
    /**
     * Заголовок баннера.
     */
    title: PropTypes.string.isRequired,
    /**
     * Описание баннера.
     */
    description: PropTypes.string.isRequired,
    /**
     * URL изображения баннера.
     */
    imageUrl: PropTypes.string.isRequired,
    /**
     * URL, на который ведет баннер.
     */
    linkUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default AdBanner;
