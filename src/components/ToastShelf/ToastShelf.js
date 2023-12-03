import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

function ToastShelf({ toasts = [] }) {
  const { clearAllToasts } = React.useContext(ToastContext);
  useEscapeKey(clearAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts.map(({ id, ...rest }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast {...rest} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
