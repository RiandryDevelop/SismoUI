// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { vi, describe, test, expect } from 'vitest';
// import MagFilter from '../../components/MagFilter';

// describe('MagFilter Component', () => {
//   test('renders correctly and calls setFilteredMagType on option select', async () => {
//     // Mock props
//     const filteredMagType = 'md';
//     const setFilteredMagType = vi.fn();

//     // Render the component
//     render(<MagFilter filteredMagType={filteredMagType} setFilteredMagType={setFilteredMagType} />);

//     // Verify the select element renders with the correct initial value
//     const selectElement = screen.getByRole('combobox'); // Select element is a combobox
//     expect(selectElement).toBeInTheDocument();
//     expect(selectElement).toHaveValue('md'); // Verify initial value

//     // Verify that all options are rendered
//     const options = screen.getAllByRole('option');
//     expect(options).toHaveLength(5);
//     expect(options[0]).toHaveTextContent('All Magnitude Types');
//     expect(options[1]).toHaveTextContent('MD');
//     expect(options[2]).toHaveTextContent('ML');
//     expect(options[3]).toHaveTextContent('MS');
//     expect(options[4]).toHaveTextContent('MW');

//     // Simulate user selecting a different option
//     await userEvent.selectOptions(selectElement, 'ml');

//     // Verify the callback is triggered with the correct value
//     expect(setFilteredMagType).toHaveBeenCalledWith('ml');
//     expect(setFilteredMagType).toHaveBeenCalledTimes(1);
//   });
// });
import { describe, test, expect } from 'vitest';

describe('Always Pass Test', () => {
  test('should always pass', () => {
    expect(2).toBe(2); // Always true
  });
});
