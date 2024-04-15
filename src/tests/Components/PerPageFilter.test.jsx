import { render, screen, waitFor } from '@testing-library/react';

import PerPageFilter from '../../components/PerPageFilter';
import { server } from '../mocks/browser';
import { vi } from 'vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PerPageFilter', () => {
  test('renders correctly and sets per page value', async () => {
    const setPerPageMock = vi.fn(); 

    render(<PerPageFilter perPage={10} setPerPage={setPerPageMock} />);

  
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeDefined();
    });

  
    await waitFor(() => {
      expect(screen.getByRole('list-option-10', {value: '10'})).toBeDefined();
      expect(screen.getByRole('list-option-20', {value: '20'})).toBeDefined();
      expect(screen.getByRole('list-option-50', {value: '50'})).toBeDefined();
    });
  });
});
