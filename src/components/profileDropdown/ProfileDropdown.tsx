import React, { useState } from 'react';

import Modals from '../modals/Modals';

import icon_profile from '../../resources/img/icon_profile.png';
import classNames from './profileDropdown.module.css';

import useOutsideClick from '../../utils/use-outside-click';

interface DropdownProps {
  // Здесь могут быть дополнительные пропсы, если нужно
}

const ProfileDropdown: React.FC<DropdownProps> = () => {
  const [modalMode, setModalMode] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { ref, isVisible, setIsVisible } =
    useOutsideClick<HTMLDivElement>(false);

  const handleModalClose = () => {
    setModalMode(undefined);
  };

  const openLoginModal = () => {
    setModalMode(modalMode === 'login' ? undefined : 'login');
    setIsVisible(false);
  };

  const openRegisterModal = () => {
    setModalMode(modalMode === 'register' ? undefined : 'register');
    setIsVisible(false);
  };

  const openProfileModal = () => {
    setModalMode(modalMode === 'profile' ? undefined : 'profile');
    setIsVisible(false);
  };

  const handleLogin = () => {
    // Здесь вы можете реализовать логику входа пользователя
    // setIsLoggedIn(true);
    // openLoginModal();
  };

  const handleRegister = () => {
    // Здесь вы можете реализовать логику регистрации пользователя
    // openRegisterModal();
  };

  const handleLogout = () => {
    // Здесь реализуйте логику выхода пользователя
    setIsLoggedIn(false);
    setIsVisible(false);
  };

  return (
    <div className={classNames.dropdownContainer} ref={ref}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={classNames.profileButton}
      >
        <img src={icon_profile} alt="Profile Icon" />
      </button>

      {isVisible && (
        <div className={classNames.dropdownMenu}>
          {isLoggedIn ? (
            <>
              <div className={classNames.titleDropdown}>Profile</div>
              <div className={classNames.dropdownPanel}>
                <button
                  onClick={openProfileModal}
                  className={classNames.menuLink}
                >
                  My Profile
                </button>
                <button onClick={handleLogout} className={classNames.menuLink}>
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={classNames.titleDropdown}>Profile</div>
              <div className={classNames.dropdownPanel}>
                <button
                  onClick={openLoginModal}
                  className={classNames.menuLink}
                >
                  Log In
                </button>
                <button
                  onClick={openRegisterModal}
                  className={classNames.menuLink}
                >
                  Register
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <Modals
        isOpen={modalMode === 'login'}
        onRequestClose={handleModalClose}
        className={classNames.loginModalWrapper}
      >
        <h2>Log In</h2>
        <form>
          <label>
            <h3>E-mail</h3>
            <input type="email" />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" />
          </label>
          <button type="button" onClick={handleLogin}>
            Log In
          </button>
          <p>
            Don’t have an account?
            <button onClick={openRegisterModal} className={classNames.menuLink}>
              Register
            </button>
          </p>
        </form>
      </Modals>

      <Modals
        isOpen={modalMode === 'register'}
        onRequestClose={handleModalClose}
        className={classNames.registerModalWrapper}
      >
        <h2>Register</h2>
        <form>
          <label>
            <h3>First name</h3>
            <input type="first-name" />
          </label>
          <label>
            <h3>Last name</h3>
            <input type="last-name" />
          </label>
          <label>
            <h3>E-mail</h3>
            <input type="email" />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" />
          </label>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <p>
            Already have an account?
            <button onClick={openLoginModal} className={classNames.menuLink}>
              Log In
            </button>
          </p>
        </form>
      </Modals>

      <Modals
        isOpen={modalMode === 'profile'}
        onRequestClose={handleModalClose}
        className={classNames.profileModalWrapper}
      >
        <div className={classNames.profileModal}>
          <div className={classNames.leftBlock}>
            <div className={classNames.avatarBlock}>
              <div className={classNames.avatar}></div>
              <div className={classNames.userName}></div>
            </div>
          </div>
          <div className={classNames.rightBlock}>
            <h2>MY PROFILE</h2>
          </div>
        </div>
      </Modals>
    </div>
  );
};

export default ProfileDropdown;
