import './appHeader.module.css';
import ProfileDropdown from '../profileDropdown/ProfileDropdown';

const AppHeader = () => {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        <a>Breakfast with Jenia</a>
      </h1>
      <nav className='app__menu'>
        <ul>
          <li>About</li>
          <li>Recipes</li>
          <li>Recipes</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <ProfileDropdown />
    </header>
  );
};

export default AppHeader;
