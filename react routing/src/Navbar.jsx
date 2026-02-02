import { Link } from "react-router";

const Links = () => {
  return (
    <div className="header">
      <div>
        <Link to="/" className="link">
          <h1>Logo</h1>
        </Link>
      </div>
      <div>
        <ul className="li-links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/user/services" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/college" className="link">
              College
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
