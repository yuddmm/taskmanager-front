import './header.scss';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '../../utils/navigationLinks';
import { useStaticText } from '../../hooks/useStaticText';

const Header = () => {
  const staticText = useStaticText();

  return (
    <div className="headerWrapper">
      <div className="headerContainer container">
        <div className="headerLogotype">
          <NavLink to="/">{staticText.logotypeTitle}</NavLink>
        </div>
        <div className="headerNavigation">
          {staticText.navigationList.map((item, index) => {
            return (
              <NavLink
                to={navigationLinks[index]}
                key={index}
                className="headerLink"
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
        <div className="headerWhiteSpace grow"></div>
        <div className="headerProfile">
          <NavLink to="/login" className="headerLink">
            {staticText.authTitle}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
