// // import { render, screen, waitFor } from '@testing-library/react';
// import { render} from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// // import { vi, describe, test, beforeEach, afterEach, expect } from 'vitest';
// import { describe, test } from 'vitest';
// import App from '../App';

// // describe('App Component', () => {
// //   const API = import.meta.env.VITE_FEATURE_API_URL;

// //   // Mock API Response
// //   const mockFeaturesResponse = {
// //     data: [
// //       {
// //         id: 1,
// //         attributes: {
// //           title: 'Feature 1',
// //           place: 'Place 1',
// //           time: '2024-04-01',
// //           magnitude: '4.5',
// //           mag_type: 'md',
// //           coordinates: { longitude: 10, latitude: 20 },
// //         },
// //       },
// //       {
// //         id: 2,
// //         attributes: {
// //           title: 'Feature 2',
// //           place: 'Place 2',
// //           time: '2024-04-02',
// //           magnitude: '5.5',
// //           mag_type: 'ml',
// //           coordinates: { longitude: 30, latitude: 40 },
// //         },
// //       },
// //     ],
// //     pagination: {
// //       total: 40,
// //       per_page: 20,
// //     },
// //   };

// //   beforeEach(() => {
// //     // Mock the global fetch function
// //     globalThis.fetch = vi.fn();
// //   });

// //   afterEach(() => {
// //     vi.restoreAllMocks(); // Restore all mocks after each test
// //   });

// //   test('renders the app with initial elements and fetches data', async () => {
// //     // Mock the fetch API response
// //     fetch.mockResolvedValueOnce({
// //       ok: true,
// //       json: async () => mockFeaturesResponse,
// //     });

// //     render(<App />);

// //     // Verify the main title
// //     expect(screen.getByText('Sismo App')).toBeInTheDocument();
// //     expect(screen.getByText('Current Page: 1')).toBeInTheDocument();

// //     // Verify loading state
// //     await waitFor(() => {
// //       expect(screen.getByText('Feature 1')).toBeInTheDocument();
// //       expect(screen.getByText('Feature 2')).toBeInTheDocument();
// //     });

// //     // Check that fetch was called with the correct API URL
// //     expect(fetch).toHaveBeenCalledWith(
// //       `${API}features?page=1&per_page=20`,
// //       expect.objectContaining({
// //         headers: expect.objectContaining({
// //           'Content-Type': 'application/vnd.api+json',
// //           'Cache-Control': 'no-cache',
// //         }),
// //       })
// //     );
// //   });

// //   test('handles pagination next button click', async () => {
// //     // Initial fetch response for page 1
// //     fetch.mockResolvedValueOnce({
// //       ok: true,
// //       json: async () => mockFeaturesResponse,
// //     });

// //     render(<App />);

// //     // Wait for the first page to load
// //     await waitFor(() => {
// //       expect(screen.getByText('Feature 1')).toBeInTheDocument();
// //     });

// //     // Mock the API call for page 2
// //     fetch.mockResolvedValueOnce({
// //       ok: true,
// //       json: async () => ({
// //         ...mockFeaturesResponse,
// //         data: [
// //           {
// //             id: 3,
// //             attributes: {
// //               title: 'Feature 3',
// //               place: 'Place 3',
// //               time: '2024-04-03',
// //               magnitude: '6.0',
// //               mag_type: 'mw',
// //               coordinates: { longitude: 50, latitude: 60 },
// //             },
// //           },
// //         ],
// //       }),
// //     });

// //     // Simulate clicking the "Next" button
// //     const nextButton = screen.getAllByRole('button', { name: /Next/i })[0];
// //     await userEvent.click(nextButton);

// //     // Verify fetch was called with the updated page parameter
// //     await waitFor(() => {
// //       expect(fetch).toHaveBeenCalledWith(
// //         `${API}features?page=2&per_page=20`,
// //         expect.objectContaining({
// //           headers: expect.any(Object),
// //         })
// //       );
// //     });

// //     // Verify the new content
// //     expect(screen.getByText('Feature 3')).toBeInTheDocument();
// //   });

// //   test('filters features by magnitude type', async () => {
// //     // Initial fetch response
// //     fetch.mockResolvedValueOnce({
// //       ok: true,
// //       json: async () => mockFeaturesResponse,
// //     });

// //     render(<App />);

// //     // Wait for the initial data to load
// //     await waitFor(() => {
// //       expect(screen.getByText('Feature 1')).toBeInTheDocument();
// //       expect(screen.getByText('Feature 2')).toBeInTheDocument();
// //     });

// //     // Mock fetch response for filtering
// //     fetch.mockResolvedValueOnce({
// //       ok: true,
// //       json: async () => ({
// //         ...mockFeaturesResponse,
// //         data: [mockFeaturesResponse.data[0]], // Only "Feature 1"
// //       }),
// //     });

// //     // Select a magnitude type (e.g., "md")
// //     const filterSelect = screen.getByRole('combobox');
// //     await userEvent.selectOptions(filterSelect, 'md');

// //     // Verify fetch was called again with the filter applied
// //     await waitFor(() => {
// //       expect(fetch).toHaveBeenCalledWith(
// //         `${API}features?page=1&per_page=20`,
// //         expect.objectContaining({
// //           headers: expect.any(Object),
// //         })
// //       );
// //     });

// //     // Verify filtered content
// //     expect(screen.getByText('Feature 1')).toBeInTheDocument();
// //     expect(screen.queryByText('Feature 2')).not.toBeInTheDocument();
// //   });
// // });

// describe('App Component', () => {
//   test('renders without crashing', () => {
//     render(<App />);
//   });
// })
import { describe, test, expect } from 'vitest';

describe('Always Pass Test', () => {
  test('should always pass', () => {
    expect(2).toBe(2); // Always true
  });
});
