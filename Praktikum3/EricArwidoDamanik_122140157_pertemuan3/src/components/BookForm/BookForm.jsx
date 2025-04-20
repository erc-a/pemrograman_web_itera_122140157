import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./BookForm.css";

function BookForm({ onSubmit, bookToEdit, onCancel }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("Udah Punya");
    const [error, setError] = useState("");

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title);
            setAuthor(bookToEdit.author);
            setStatus(bookToEdit.status);
        }
    }, [bookToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author) {
            setError("Judul dan Penulis harus diisi");
            return;
        }
        
        const newBook = {
            id: bookToEdit ? bookToEdit.id : Date.now(),
            title,
            author,
            status,
        };

        onSubmit(newBook);

        setTitle("");
        setAuthor("");
        setStatus("Udah Punya");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input 
            type="text"
            placeholder="Judul buku"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Penulis"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="miliki">Dimiliki</option>
            <option value="Lagi Baca">Sedang Dibaca</option>
            <option value="Ingin Beli">Ingin Dibeli</option>
          </select>
          <button type="submit">{bookToEdit ? 'Simpan Perubahan' : 'Tambah Buku'}</button>
          {bookToEdit && <button type="button" onClick={onCancel}>Batal</button>}
        </form>
      );
    }
    
    BookForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
      onCancel: PropTypes.func,
      bookToEdit: PropTypes.object,
    };
    
    export default BookForm;