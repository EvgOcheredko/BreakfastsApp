import classNames from './app.module.css';

import AppHeader from '../appHeader/AppHeader';
import { MainPage } from '../../pages/mainPage/MainPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppFooter from '../appFooter/AppFooter';

function App() {
  return (
    <Router>
      <div className={classNames.App}>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
