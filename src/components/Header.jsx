import style from './Header.module.scss';
import IconMoonNight from '../assets/images/half-moon-shape-svgrepo-com.svg?react';
import IconMoon from '../assets/images/crescent-moon-phase-svgrepo-com.svg?react';
import { useTheme } from '../hooks/themeUtils';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const { theme = 'dark', toggleTheme } = useTheme();
  const containerClassnames = `${style.header} ${theme === 'dark' ? ` ${style.light}` : `''`}`;
  const themeText = theme === 'dark' ? 'Light theme' : 'Dark theme';
  function handleClick() {
    navigate('/');
  }
  const ThemeIcon =
    theme === 'dark' ? (
      <IconMoonNight className={style.icon} />
    ) : (
      <IconMoon className={style.icon} fill="white" />
    );

  return (
    <div className={containerClassnames}>
      <Link className={style.link} to={`/`}>
        <h1 className={style.h1} onClick={handleClick}>
          Where in the world?
        </h1>
      </Link>
      <p onClick={toggleTheme}>
        {ThemeIcon}
        {themeText}
      </p>
    </div>
  );
}
export { Header };
