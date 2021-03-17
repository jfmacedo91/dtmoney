import Modal from 'react-modal';

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
      >
        <h2>Cadastrar transação</h2>
      </Modal>
  );
}