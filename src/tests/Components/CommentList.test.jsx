import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentList from '../../components/CommentList';
import { expect, vi } from 'vitest';

describe('CommentList', () => {
  test('renders correctly and handles comment operations', async () => {
    
    const featureId = 123;

    
    const comments = [
      { id: 1, body: 'Comment 1' },
      { id: 2, body: 'Comment 2' },
      { id: 3, body: 'Comment 3' },
    ];

    
    global.fetch = vi.fn().mockReturnValueOnce({
      ok: true,
      json: () => Promise.resolve(comments),
    });

    
    render(<CommentList feature_id={featureId} />);

    
    await waitFor(() => {
      expect(screen.getByText('Comentarios (3)')).toBeDefined();
    });


    
    comments.forEach((comment) => {
      expect(screen.getByText(comment.body)).toBeDefined();
    });

    
    window.confirm = vi.fn(() => true);

    
    userEvent.click(screen.getAllByText('Eliminar')[0]);

  });
});
