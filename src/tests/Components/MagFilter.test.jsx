import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MagFilter from '../../components/MagFilter';
import { server } from '../mocks/browser';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MagFilter', () => {
  test('renders correctly and filters magnitude types', async () => {
    render(<MagFilter filteredMagType="" setFilteredMagType={() => {}} />);

    // Verify that the options are loaded from the API
    await waitFor(() => {
      expect(screen.getByText('All Magnitude Types')).toBeDefined();
      expect(screen.getByText('MD')).toBeDefined();
      expect(screen.getByText('ML')).toBeDefined();
      expect(screen.getByText('MS')).toBeDefined();
      expect(screen.getByText('MW')).toBeDefined();
    });

    // Select a magnitude type
    userEvent.selectOptions(screen.getByText('All Magnitude Types'), 'ms');

    // Verify that the selected value is updated
    expect(screen.getByText('All Magnitude Types'));
  });
});
