import { Alert, Snackbar } from '@mui/material';
import { Dispatch, SetStateAction, useContext, useState, createContext, useCallback } from 'react';

type ToastTypes = 'error' | 'success';

type ToastProps = {
  message: string;
  type: ToastTypes;
  showToast: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
};

type ToastContextState = {
  setToast: Dispatch<{ type: ToastTypes; message: string }>;
};

const ToastContext = createContext<ToastContextState>({
  setToast: () => {
    return;
  },
});

const Toast: React.FC<ToastProps> = ({ message, type, showToast, setShowToast }) => {
  const handleClose = useCallback(() => {
    setShowToast(false);
  }, [setShowToast]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={showToast}
      sx={{
        maxWidth: 400,
      }}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert variant="filled" severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

const ToastProvider = ({ ...props }) => {
  const [toastData, setToastData] = useState<{ type: ToastTypes; message: string }>({ type: 'success', message: '' });
  const [showToast, setShowToast] = useState(false);

  const setToast: Dispatch<{ type: ToastTypes; message: string }> = useCallback((data) => {
    setToastData(data);
    setShowToast(true);
  }, []);

  return (
    <ToastContext.Provider value={{ setToast }} {...props}>
      {props.children}
      <Toast message={toastData.message} type={toastData.type} showToast={showToast} setShowToast={setShowToast} />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
