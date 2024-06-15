import PropTypes from 'prop-types';

/**
 * Компонент CurrencyRate для отображения информации о курсе валют.
 *
 * @component
 * @example
 * const currency = 'EUR'
 * const exchange = 'MOEX'
 * const rate = 70.68
 * const change = 0.14
 * return (
 *   <CurrencyRate currency={currency} exchange={exchange} rate={rate} change={change} />
 * )
 */
const CurrencyRate = ({ currency, exchange, rate, change }) => {
  return (
    <div className="currency-rate">
      <span className="currency">{currency}</span>
      <span className="exchange">{exchange}</span>
      <span className="rate">{rate}</span>
      <span className={`change ${change >= 0 ? 'positive' : 'negative'}`}>
        {change >= 0 ? `+${change}` : change}
      </span>
    </div>
  );
};

CurrencyRate.propTypes = {
  /**
   * Currency code (e.g., 'EUR')
   */
  currency: PropTypes.string.isRequired,
  /**
   * Exchange name (e.g., 'MOEX')
   */
  exchange: PropTypes.string.isRequired,
  /**
   * Currency rate (e.g., 70.68)
   */
  rate: PropTypes.number.isRequired,
  /**
   * Rate change (e.g., 0.14)
   */
  change: PropTypes.number.isRequired,
};

export default CurrencyRate;