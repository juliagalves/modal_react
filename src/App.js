import { useState } from 'react';
import './App.css';
import Modal from './componentes/Modal';

function App() {

  const [openModal, setOpenModal] = useState(false)

  const abrirModal = () =>{
    setOpenModal(true)
  }

  return (
    <div className='container'>
      <div className="teste">
        <button onClick={abrirModal}>Clique para abrir o modal</button>
        <Modal isOpen={openModal} toggleModal={() => setOpenModal(!openModal)}/>
      </div>
    </div>
  );
}

export default App;
