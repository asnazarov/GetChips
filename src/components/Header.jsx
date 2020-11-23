import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <Link to="/">
        <p>Лого</p>
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
  )
}

export default Header