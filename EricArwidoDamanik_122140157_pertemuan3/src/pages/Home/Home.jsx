import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';

import BookForm from '../../components/BookForm/BookForm';
import BookItem from '../../components/BookItem/BookItem';
import BookFilter from '../../components/BookFilter/BookFilter';

import './Home.css';

function Home() {
  const { books, dispatch } = useBooks();

  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleAddOrEdit = (book) => {
    if (editingBook) {
      dispatch({ type: 'EDIT_BOOK', payload: book });
      setEditingBook(null);
    } else {
      dispatch({ type: 'ADD_BOOK', payload: book });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                          book.author.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter ? book.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="home">
      <h1>MyBuku</h1>

      <BookForm
        onSubmit={handleAddOrEdit}
        bookToEdit={editingBook}
        onCancel={() => setEditingBook(null)}
      />

      <BookFilter
        search={search}
        statusFilter={statusFilter}
        onSearchChange={setSearch}
        onStatusChange={setStatusFilter}
      />

      <div className="book-list">
        {filteredBooks.length === 0 ? (
          <p>Tidak ada buku ditemukan.</p>
        ) : (
          filteredBooks.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
