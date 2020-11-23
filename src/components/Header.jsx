import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <p>Лого.</p>
        </Link>
        <nav>
          <ul>
            <Link to="/cart">
              <p>О нас</p>
            </Link>
            <Link to="/suppliers">
              Поставщики
            </Link>
          </ul>

        </nav>
      </div>
    </div>
  )
}

export default Header