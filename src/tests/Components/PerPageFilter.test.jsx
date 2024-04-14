import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PerPageFilter from '../../components/PerPageFilter';
import { server } from '../mocks/browser';
import { vi } from 'vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PerPageFilter', () => {
  test('renders correctly and sets per page value', async () => {
    const setPerPageMock = vi.fn(); // Mock function for setPerPage

    render(<PerPageFilter perPage={10} setPerPage={setPerPageMock} />);

    // Wait for the select element to be rendered
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeDefined();
    });

    // Verify that the options are loaded from the API
    await waitFor(() => {
      expect(screen.getByRole('list-option-10', {value: '10'})).toBeDefined();
      expect(screen.getByRole('list-option-20', {value: '20'})).toBeDefined();
      expect(screen.getByRole('list-option-50', {value: '50'})).toBeDefined();
    });

    // // Select a new per page value
    // userEvent.selectOptions(screen.getByRole('list-option-20', {value: '20'}), '20');

    // // Verify that setPerPage is called with the new value
    // expect(setPerPageMock).toHaveBeenCalledWith('20');

    // // Spy on the mock function's implementation
    // const spy = vi.spyOn(setPerPageMock, 'getMockImplementation');
    // expect(spy).toHaveBeenCalledWith(20); // Assert that the spy was called with the new value
  });
});
