import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import classNames from './modals.module.css';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modals = ({
  isOpen,
  onRequestClose,
  className,
  children,
}: ModalProps) => {
  const [modalRoot] = useState(document.createElement('div'));
  const modalContainer = document.getElementById('modal-root');

  useEffect(() => {
    if (!modalContainer) {
      document.body.appendChild(modalRoot);
    }

    return () => {
      if (modalContainer && modalRoot) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [modalContainer, modalRoot]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className={classNames.modalWrapper}>
          <div className={classNames.modalOverlay} onClick={onRequestClose} />
          <div
            className={cx(classNames.modalContainer, className)}
            onClick={onRequestClose}
          >
            <div
              className={classNames.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </div>,
        modalRoot,
      )
    : null;
};

export default Modals;
