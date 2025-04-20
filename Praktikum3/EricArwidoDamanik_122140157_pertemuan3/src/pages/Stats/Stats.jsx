import React from 'react';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';

import './Stats.css';

function Stats() {
  const { books } = useBooks();
  const { total, dimiliki, dibaca, dibeli } = useBookStats(books);

  return (
    <div className="stats">
      <h1>Statistik Buku</h1>
      <ul>
        <li>Total Buku: {total}</li>
        <li>Dimiliki: {dimiliki}</li>
        <li>Sedang Dibaca: {dibaca}</li>
        <li>Ingin Dibeli: {dibeli}</li>
      </ul>
    </div>
  );
}

export default Stats;
