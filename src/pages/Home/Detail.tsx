import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { Storage } from '../../libs/storage';
import { IBook, MockBook } from '../../models/Books';
import { SDK } from '../../sdk';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

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
        contentLabel="Minimal Modal Example"
      >
        <button type="button" onClick={() => setIsOpen(false)}>Close Modal</button>
        <span>{book.title}</span>
      </ReactModal>
    </div>
  );
}
