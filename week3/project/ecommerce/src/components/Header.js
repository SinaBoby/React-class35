import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1>Products</h1>
        <div>
          <Link to={'/favorites'}>Favorites</Link>
          <Link to={'/'}>Products</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
