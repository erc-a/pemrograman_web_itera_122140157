import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from './BookItem';

describe('BookItem', () => {
  const mockBook = {
    id: 1,
    title: 'Buku Testing',
    author: 'Tester',
    status: 'beli',
  };

  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  test('menampilkan judul, penulis, dan status buku', () => {
    render(<BookItem book={mockBook} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    expect(screen.getByText('Buku Testing')).toBeInTheDocument();
    expect(screen.getByText(/Tester/i)).toBeInTheDocument();
    expect(screen.getByText(/beli/i)).toBeInTheDocument();
  });

  test('memanggil onDelete saat tombol Hapus diklik', () => {
    render(<BookItem book={mockBook} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    fireEvent.click(screen.getByText('Hapus'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('memanggil onEdit saat tombol Edit diklik', () => {
    render(<BookItem book={mockBook} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    fireEvent.click(screen.getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith(mockBook);
  });
});
