import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { server } from './mocks/browser';
import { Window } from 'happy-dom';
import userEvent from '@testing-library/user-event';

// Create a new window instance with document and location options
const window = new Window({url: 'https://localhost:3000'});


// Now you can run your tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  test('renders elements and fetches features correctly', async () => {
    render(<App />, { window });

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText(/Sismo App/i)).toBeDefined();
    });

    // // Perform user interaction (if any)
    // userEvent.click(screen.getByLabelText('Button'));

    // // Assert the updated state or UI after interaction
    // await waitFor(() => {
    //   expect(screen.getByText(/Current Page: 2/i)).toBeDefined();
    // });
  });
});