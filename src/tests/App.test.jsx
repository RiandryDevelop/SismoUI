import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { server } from './mocks/browser';
import { Window } from 'happy-dom';


const window = new Window({url: 'https://localhost:3000'});


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  test('renders elements and fetches features correctly', async () => {
    render(<App />, { window });

    await waitFor(() => {
      expect(screen.getByText(/Sismo App/i)).toBeDefined();
    });
  });
});