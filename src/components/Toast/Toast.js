import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, message, handleClose }) {
  const Icon = ICONS_BY_VARIANT[variant];

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClose();
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [handleClose]);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} – </VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
