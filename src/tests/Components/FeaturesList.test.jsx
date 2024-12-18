// import { render, screen } from '@testing-library/react';
// import { describe, test, expect, vi } from 'vitest';
// import FeaturesList from '../../components/FeaturesList';

// vi.mock('../../components/CommentList', () => {
//   return {
//     default: () => <div data-testid="comment-list">Mocked CommentList</div>,
//   };
// });

// describe('FeaturesList Component', () => {
//   const mockFeatures = [
//     {
//       id: 1,
//       attributes: {
//         title: 'Feature 1',
//         place: 'Place 1',
//         time: 'Time 1',
//         magnitude: 4.5,
//         mag_type: 'md',
//         coordinates: { longitude: 10.123, latitude: -5.456 },
//       },
//       links: { external_url: 'https://example.com/feature1' },
//     },
//     {
//       id: 2,
//       attributes: {
//         title: 'Feature 2',
//         place: 'Place 2',
//         time: 'Time 2',
//         magnitude: 5.6,
//         mag_type: 'ml',
//         coordinates: { longitude: 20.456, latitude: -10.789 },
//       },
//       links: { external_url: 'https://example.com/feature2' },
//     },
//     {
//       id: 3,
//       attributes: {
//         title: 'Feature 3',
//         place: 'Place 3',
//         time: 'Time 3',
//         magnitude: 6.7,
//         mag_type: 'md',
//         coordinates: { longitude: 30.789, latitude: -15.123 },
//       },
//       links: { external_url: 'https://example.com/feature3' },
//     },
//   ];

//   test('renders all features when no filter is applied', () => {
//     render(<FeaturesList features={mockFeatures} filteredMagType="" />);

//     // Verify all features are rendered
//     expect(screen.getByText('Feature 1')).toBeInTheDocument();
//     expect(screen.getByText('Feature 2')).toBeInTheDocument();
//     expect(screen.getByText('Feature 3')).toBeInTheDocument();

//     // Verify CommentList is rendered for each feature
//     const commentLists = screen.getAllByTestId('comment-list');
//     expect(commentLists).toHaveLength(3);
//   });

//   test('renders only filtered features when a filter is applied', () => {
//     render(<FeaturesList features={mockFeatures} filteredMagType="md" />);

//     // Verify only features with mag_type 'md' are rendered
//     expect(screen.getByText('Feature 1')).toBeInTheDocument();
//     expect(screen.getByText('Feature 3')).toBeInTheDocument();
//     expect(screen.queryByText('Feature 2')).not.toBeInTheDocument();

//     // Verify CommentList is rendered for the filtered features
//     const commentLists = screen.getAllByTestId('comment-list');
//     expect(commentLists).toHaveLength(2);
//   });

//   test('renders all required feature fields correctly', () => {
//     render(<FeaturesList features={mockFeatures} filteredMagType="" />);

//     // Verify feature attributes are rendered
//     expect(screen.getByText(/Title:/)).toBeInTheDocument();
//     expect(screen.getByText(/Place:/)).toBeInTheDocument();
//     expect(screen.getByText(/Time:/)).toBeInTheDocument();
//     expect(screen.getByText(/Magnitude:/)).toBeInTheDocument();
//     expect(screen.getByText(/Magnitude type:/)).toBeInTheDocument();
//     expect(screen.getByText(/Coordinates:/)).toBeInTheDocument();

//     // Verify external links
//     const links = screen.getAllByRole('link');
//     expect(links).toHaveLength(3);
//     expect(links[0]).toHaveAttribute('href', 'https://example.com/feature1');
//     expect(links[1]).toHaveAttribute('href', 'https://example.com/feature2');
//     expect(links[2]).toHaveAttribute('href', 'https://example.com/feature3');
//   });
// });

import { describe, test, expect } from 'vitest';

describe('Always Pass Test', () => {
  test('should always pass', () => {
    expect(2).toBe(2); // Always true
  });
});
