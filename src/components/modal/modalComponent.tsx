import ReactDom from 'react-dom';
import './modalComponent.css';
import { useEffect, type ReactNode } from 'react';

export default function ModalComponent({
  children,
  open,
  onClose,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const closeOnEscapePressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeOnEscapePressed);
    return () => window.removeEventListener('keydown', closeOnEscapePressed);
  }, [open, onClose]);

  if (!open) return null;

  const portalRoot = document.getElementById('portal');
  if (!portalRoot) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="container">
        <button className="close" onClick={onClose}>
          Close
        </button>
        <div className="content">{children}</div>
      </div>
    </>,
    portalRoot
  );
}
