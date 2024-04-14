import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturesList from '../../components/FeaturesList';

describe('FeaturesList', () => {
  test('renders correctly', () => {
    // Mock data for features
    const features = [
      {
        id: 1,
        attributes: {
          title: 'Feature 1',
          place: 'Place 1',
          time: '2024-04-09 00:26:03',
          magnitude: 0.78,
          mag_type: 'md',
          coordinates: { longitude: -122.7965012, latitude: 38.8105011 },
        },
        links: { external_url: 'https://example.com/feature1' },
      },
    ];

    // Render the FeaturesList component with mock data
    render(<FeaturesList features={features} filteredMagType="" />);

    // Verify that each feature's information is displayed correctly
    features.forEach((feature) => {
      expect(screen.getByText(`Title: ${feature.attributes.title}`)).toBeDefined();
      expect(screen.getByText(`Place: ${feature.attributes.place}`)).toBeDefined();
      expect(screen.getByText(`Time: ${feature.attributes.time}`)).toBeDefined();
      expect(screen.getByText(`Magnitude: ${feature.attributes.magnitude}`)).toBeDefined();
      expect(screen.getByText(`Magnitude type: ${feature.attributes.mag_type}`)).toBeDefined();
      expect(screen.getByText(`Coordinates: ${feature.attributes.coordinates.longitude}, ${feature.attributes.coordinates.latitude}`)).toBeDefined();
      expect(screen.getByText(feature.attributes.title)).toHaveAttribute('href', feature.links.external_url);
    });
  });
});
