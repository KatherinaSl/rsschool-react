import { useState } from 'react';
import ModalComponent from '../modal/modalComponent';
import './mainComponent.css';
import HookFormComponent from '../hookForm/hookForm';

export default function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main-container">
      <h2>React Forms</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
        <HookFormComponent />
      </ModalComponent>
    </div>
  );
}
