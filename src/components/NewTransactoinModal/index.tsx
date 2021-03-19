import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

interface NewTransactoinModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactoinModalProps) {
  return (
    <Modal
        isOpen={ isOpen }
        onRequestClose={ onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={ onRequestClose }
          className="react-modal-close"
        >
          <img src={ closeImg } alt="Fechar modal"/>
        </button>
        
        <Container>
          <h2>Cadastrar transação</h2>

          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}