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


    await waitFor(() => {
      expect(screen.getByText('All Magnitude Types')).toBeDefined();
      expect(screen.getByText('MD')).toBeDefined();
      expect(screen.getByText('ML')).toBeDefined();
      expect(screen.getByText('MS')).toBeDefined();
      expect(screen.getByText('MW')).toBeDefined();
    });


    userEvent.selectOptions(screen.getByText('All Magnitude Types'), 'ms');


    expect(screen.getByText('All Magnitude Types'));
  });
});
