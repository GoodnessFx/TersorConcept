import { Toaster as SonnerToaster } from 'sonner@2.0.3';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: 'white',
          border: '1px solid #e5e7eb',
          color: '#374151',
        },
        className: 'shadow-lg',
      }}
    />
  );
}