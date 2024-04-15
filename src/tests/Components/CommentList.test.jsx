import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentList from '../../components/CommentList';
import { expect, vi } from 'vitest';

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
    global.fetch = vi.fn().mockReturnValueOnce({
      ok: true,
      json: () => Promise.resolve(comments),
    });

    // Render the CommentList component
    render(<CommentList feature_id={featureId} />);

    // Wait for comments to be loaded
    await waitFor(() => {
      expect(screen.getByText('Comentarios (3)')).toBeDefined();
    });


    // Verify that comments are rendered correctly
    comments.forEach((comment) => {
      expect(screen.getByText(comment.body)).toBeDefined();
    });

    // Mock delete confirmation
    window.confirm = vi.fn(() => true);

    // Mock delete operation on the first comment
    userEvent.click(screen.getAllByText('Eliminar')[0]);

  });
});
