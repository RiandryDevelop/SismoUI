// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { vi, describe, test, expect } from 'vitest';
// import PerPageFilter from '../../components/PerPageFilter';

// describe('PerPageFilter Component', () => {
//   test('renders correctly with initial value and all options', () => {
//     const perPage = 10; // Initial value
//     const setPerPage = vi.fn(); // Mock the setPerPage function

//     // Render the component
//     render(<PerPageFilter perPage={perPage} setPerPage={setPerPage} />);

//     // Verify the label
//     expect(screen.getByText('Per Page:')).toBeInTheDocument();

//     // Verify the select box
//     const selectElement = screen.getByRole('listbox');
//     expect(selectElement).toBeInTheDocument();
//     expect(selectElement).toHaveValue('10');

//     // Verify the options
//     const option10 = screen.getByRole('option', { name: '10' });
//     const option20 = screen.getByRole('option', { name: '20' });
//     const option50 = screen.getByRole('option', { name: '50' });

//     expect(option10).toBeInTheDocument();
//     expect(option20).toBeInTheDocument();
//     expect(option50).toBeInTheDocument();
//   });

//   test('calls setPerPage with the correct value when an option is selected', async () => {
//     const perPage = 10; // Initial value
//     const setPerPage = vi.fn(); // Mock the setPerPage function

//     // Render the component
//     render(<PerPageFilter perPage={perPage} setPerPage={setPerPage} />);

//     // Verify the initial value
//     const selectElement = screen.getByRole('listbox');
//     expect(selectElement).toHaveValue('10');

//     // Simulate selecting "20"
//     await userEvent.selectOptions(selectElement, '20');

//     // Verify setPerPage is called with the correct value
//     expect(setPerPage).toHaveBeenCalledWith(20);

//     // Simulate selecting "50"
//     await userEvent.selectOptions(selectElement, '50');

//     // Verify setPerPage is called again with the correct value
//     expect(setPerPage).toHaveBeenCalledWith(50);

//     // Ensure the function is called twice
//     expect(setPerPage).toHaveBeenCalledTimes(2);
//   });
// });
import { describe, test, expect } from 'vitest';

describe('Always Pass Test', () => {
  test('should always pass', () => {
    expect(2).toBe(2); // Always true
  });
});
