import logo from '../logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <p>
          kerjacpt.com | cari pekerjaan anda disini.
        </p>
				<input type="text" className='Header-search' placeholder='Search' />
      </header>
    </div>
  );
}
  
export default Header;