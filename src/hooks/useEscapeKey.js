import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const escapeKeydownHandler = (e) => {
      if (e.code === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', escapeKeydownHandler);

    return () => {
      window.removeEventListener('keydown', escapeKeydownHandler);
    };
  }, [callback]);
};
