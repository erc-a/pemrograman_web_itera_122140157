import { render, screen } from '@testing-library/react';
import Stats from './Stats';
import { BookProvider } from '../../context/BookContext';

// Mock useLocalStorage agar context dapat dummyBooks
jest.mock('../../hooks/useLocalStorage', () => {
  return () => [
    [
      { id: 1, status: 'miliki' },
      { id: 2, status: 'baca' },
      { id: 3, status: 'beli' },
      { id: 4, status: 'baca' },
    ],
    jest.fn()
  ];
});

test('Menampilkan total buku berdasarkan status', () => {
  render(
    <BookProvider>
      <Stats />
    </BookProvider>
  );

  expect(screen.getByText(/Total Buku:/i)).toBeInTheDocument();
  expect(screen.getByText(/Dimiliki: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Sedang Dibaca: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Ingin Dibeli: 1/i)).toBeInTheDocument();
});
