import * as React from 'react';
import classNames from './mainPage.module.css';

import main1 from '../../resources/img/mainPage/main1.jpeg';
import main2 from '../../resources/img/mainPage/main2.jpeg';
import main3 from '../../resources/img/mainPage/main3.jpeg';


export const MainPage = () => {
  return (
    <div className={classNames.welcomePanel}>
      <div className={classNames.overlayPanel}></div>
      <div className={classNames.imageList}>
        <div className={classNames.welcomeText}>
          Welcome <br />
          and <br />
          good morning
        </div>
        <div className={classNames.imageContainer}>
          <img className={classNames.mainImg} src={main1} alt='Profile Icon' />
        </div>
        <div className={classNames.imageContainer}>
          <img className={classNames.mainImg} src={main2} alt='Profile Icon' />
        </div>
        <div className={classNames.imageContainer}>
          <img className={classNames.mainImg} src={main3} alt='Profile Icon' />
        </div>
      </div>
    </div>
  );
};