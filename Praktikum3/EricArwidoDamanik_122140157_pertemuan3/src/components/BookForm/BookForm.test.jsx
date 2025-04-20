import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

describe('BookForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  test('memanggil onSubmit dengan data benar', () => {
    render(<BookForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText('Judul buku'), {
      target: { value: 'Buku Baru' },
    });
    fireEvent.change(screen.getByPlaceholderText('Penulis'), {
      target: { value: 'Penulis Baru' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'baca' }
      });

    fireEvent.click(screen.getByText(/Tambah Buku/i));
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit.mock.calls[0][0].title).toBe('Buku Baru');
  });

  test('tidak submit jika input kosong', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    fireEvent.click(screen.getByText(/Tambah Buku/i));
    expect(mockSubmit).not.toHaveBeenCalled();
    expect(screen.getByText(/judul dan penulis harus diisi/i)).toBeInTheDocument();

  });
});
