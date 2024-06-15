/**
 * Компонент заголовка, отображающий логотип и меню навигации,
 * с формой поиска и рекомендацией.
 * @returns {JSX.Element} элемент Header
 */
function Header() {
  return (
    <header>
      <a href="#" className="logo">
        Яндекс
      </a>
      <nav>
        <a href="#">Видео</a>
        <a href="#">Картинки</a>
        <a href="#">Новости</a>
        <a href="#">Карты</a>
        <a href="#">Маркет</a>
        <a href="#">Переводчик</a>
        <a href="#">Эфир</a>
        <a href="#">ещё</a>
      </nav>
      <form>
        <input type="text" placeholder="Введите запрос" />
        <button type="submit">Найти</button>
        <div>Найдётся всё. Например,</div>
        <a href="#">фаза луны сегодня</a>
      </form>
    </header>
  );
}

export default Header;
