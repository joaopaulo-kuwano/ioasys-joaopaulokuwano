/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { Storage } from '../../libs/storage';
import { IBook, MockBook } from '../../models/Books';
import { SDK } from '../../sdk';
import { BookDetail } from './BookDetail';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#modalAppElement');

interface Props {
  id: string
}

export function Detail({ id }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [book, setBook] = useState<IBook>(MockBook);

  const getBookById = async () => {
    if (!id) return;
    setIsOpen(true);
    const sdk = new SDK();
    const api = await sdk.getBook(Storage.getItem('authorization'), id);
    setBook(api);
  };

  useEffect(() => {
    getBookById();
  }, [id]);

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Detalhe de Livro"
        style={customStyles}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <i
            role="log"
            onClick={() => setIsOpen(false)}
            className="fas fa-times fa-lg"
            style={{ color: '#999', cursor: 'pointer' }}
          />
        </div>
        <BookDetail book={book} />
      </ReactModal>
    </div>
  );
}
