import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

test('mengubah nilai pencarian dan status filter', () => {
  const onSearchChange = jest.fn();
  const onStatusChange = jest.fn();

  render(
    <BookFilter
      search=""
      statusFilter=""
      onSearchChange={onSearchChange}
      onStatusChange={onStatusChange}
    />
  );

  // Test input pencarian
  fireEvent.change(screen.getByPlaceholderText(/cari/i), {
    target: { value: 'Test' },
  });

  expect(onSearchChange).toHaveBeenCalledWith('Test');

  // Test dropdown status
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'beli' } });

  expect(onStatusChange).toHaveBeenCalledWith('beli');
});
