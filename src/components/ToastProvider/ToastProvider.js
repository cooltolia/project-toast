import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const addToast = React.useCallback(({ message, variant }) => {
    const id = crypto.randomUUID();
    const handleClose = () => {
      removeToast(id);
    };

    setToasts((toasts) => [
      ...toasts,
      {
        id,
        variant,
        message,
        handleClose,
      },
    ]);
  }, []);

  const clearAllToasts = () => {
    setToasts([])
  }

  const value = React.useMemo(
    () => ({
      toasts,
      removeToast,
      addToast,
      clearAllToasts,
    }),
    [toasts, addToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
