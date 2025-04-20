import { renderHook } from '@testing-library/react';
import useBookStats from './useBookStats';

test('menghitung jumlah buku berdasarkan status', () => {
  const books = [
    { id: 1, status: 'miliki' },
    { id: 2, status: 'baca' },
    { id: 3, status: 'beli' },
    { id: 4, status: 'beli' },
  ];

  const { result } = renderHook(() => useBookStats(books));

  expect(result.current.total).toBe(4);
  expect(result.current.dimiliki).toBe(1);
  expect(result.current.dibaca).toBe(1);
  expect(result.current.dibeli).toBe(2);
});
