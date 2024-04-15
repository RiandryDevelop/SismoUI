import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../../components/Pagination';

describe('Pagination', () => {
  test('renders correctly and handles page navigation', async () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 3;

    render(<Pagination totalPages={pages.length} currentPage={currentPage} />);

    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeDefined();
    });

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    userEvent.click(previousButton);
    userEvent.click(nextButton);
  });
});
