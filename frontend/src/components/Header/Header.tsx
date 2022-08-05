import icon from  '../../assets/img/dsmeta_logo.svg';
import './Header.css';

function Header() {
  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={icon} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://github.com/rafaelrodrigopa">rafaelrodrigopa</a>
            </p>
        </div>
    </header>
  )
}

export default Header;
