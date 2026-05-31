import { useState } from 'react';
import ModalComponent from '../modal/modalComponent';
import './mainComponent.css';
import HookFormComponent from '../hookForm/hookForm';
import { useSelector } from 'react-redux';
import { savedForm } from '../../store/slice';
import CardComponent from '../card/cardComponent';

export default function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector(savedForm);

  return (
    <div className="main-container">
      <h2>React Forms</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
        <HookFormComponent />
      </ModalComponent>
      {data?.length > 0 &&
        data.map((item, index) => <CardComponent key={index} data={item} />)}
    </div>
  );
}
