import React from 'react';
import PropTypes from 'prop-types';

import './BookFilter.css';

function BookFilter({ search, statusFilter, onSearchChange, onStatusChange }) {
  return (
    <div className="book-filter">
      <input
        type="text"
        placeholder="Cari berdasarkan judul atau penulis..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">Semua Status</option>
        <option value="miliki">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
        </select>

    </div>
  );
}

BookFilter.propTypes = {
  search: PropTypes.string.isRequired,
  statusFilter: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired
};

export default BookFilter;
