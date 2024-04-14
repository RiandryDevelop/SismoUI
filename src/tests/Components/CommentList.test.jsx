import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentList from './CommentList';
import { vi } from 'vitest';

describe('CommentList', () => {
  test('renders correctly and handles comment operations', async () => {
    // Mock feature ID
    const featureId = 123;

    // Mock comments data
    const comments = [
      { id: 1, body: 'Comment 1' },
      { id: 2, body: 'Comment 2' },
      { id: 3, body: 'Comment 3' },
    ];

    // Mock fetch function
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(comments),
    });

    // Mock setCurrentPage function
    const setCurrentPageMock = vi.fn();

    // Render the CommentList component
    render(<CommentList feature_id={featureId} setCurrentPage={setCurrentPageMock} />);

    // Wait for comments to be loaded
    await waitFor(() => {
      expect(screen.getByText('Comentarios (3)')).toBeDefined();
    });

    // Spy on the setCurrentPage function
    const spy = vi.spyOn(setCurrentPageMock, 'getMockImplementation');

    // Verify that the setCurrentPage function was called with the correct value
    vi.assert(spy).toHaveBeenCalledWith(1);

    // Verify that comments are rendered correctly
    comments.forEach((comment) => {
      expect(screen.getByText(comment.body)).toBeDefined();
    });

    // Mock delete confirmation
    window.confirm = jest.fn(() => true);

    // Mock fetch function for delete request
    global.fetch.mockResolvedValueOnce({ ok: true });

    // Perform delete operation on the first comment
    userEvent.click(screen.getAllByText('Eliminar')[0]);

    // Wait for delete operation to complete
    await waitFor(() => {
      expect(screen.queryByText(comments[0].body)).toBeNull();
    });

    // Verify that the delete request is sent with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.VITE_FEATURE_API_URL}comments/${comments[0].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });

    // Verify that the setCurrentPage function was called again after deletion
    vi.assert(spy).toHaveBeenCalledWith(1);
  });
});
