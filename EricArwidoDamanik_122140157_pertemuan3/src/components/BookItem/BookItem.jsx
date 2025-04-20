import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ book, onDelete, onEdit }) {
  return (
    <div className="book-item">
      <div>
        <h3>{book.title}</h3>
        <p><strong>Penulis:</strong> {book.author}</p>
        <p><strong>Status:</strong> {book.status}</p>
      </div>
      <div className="book-actions">
        <button onClick={() => onEdit(book)}>Edit</button>
        <button onClick={() => onDelete(book.id)}>Hapus</button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default BookItem;
