import classNames from './app.module.css';

import AppHeader from '../appHeader/AppHeader';
import { MainPage } from '../pages/MainPage';

function App() {
  return (
    <div className={classNames.App}>
      <AppHeader />
      <MainPage />
      <div id='modals-root' />
    </div>
  );
}

export default App;
