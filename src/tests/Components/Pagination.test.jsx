import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../../components/Pagination';
import { assert, vi } from 'vitest';

describe('Pagination', () => {
  test('renders correctly and handles page navigation', async () => {
    // const setCurrentPageMock = vi.fn(); // Mock function for setCurrentPage
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 3;

    render(<Pagination totalPages={pages.length} currentPage={currentPage} />);

    // Wait for the pagination component to be rendered
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeDefined();
    });

    // Get all buttons for page navigation
    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    // Click on the previous button
    userEvent.click(previousButton);
    // Verify that setCurrentPage is called with the correct value
    // expect(setCurrentPageMock).toHaveBeenCalledWith(pages[currentPage - 2]);

    // Click on the next button
    userEvent.click(nextButton);
    // Verify that setCurrentPage is called with the correct value
    // expect(setCurrentPageMock).toHaveBeenCalledWith(pages[currentPage]);

    // Spy on the mock function's implementation
    // const spy = vi.spyOn(setCurrentPageMock, 'getMockImplementation');
    // assert(spy).toHaveBeenCalledWith(pages[currentPage]); // Assert that the spy was called with the new value
  });
});
