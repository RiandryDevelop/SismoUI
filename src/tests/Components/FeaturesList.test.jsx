import React from 'react';
import { render } from '@testing-library/react';
import FeaturesList from '../../components/FeaturesList';
import { expectTypeOf } from 'vitest';
import { server } from '../mocks/browser';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());




describe('FeaturesList', () => {
  test('renders correctly', async () => {
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

    
    

    render(<FeaturesList features={features} filteredMagType="" />);
    

    expectTypeOf(features[0].title).toEqualTypeOf(Number)
    expectTypeOf(features[0].place).toEqualTypeOf(String)
    expectTypeOf(features[0].time).toEqualTypeOf(String)
    expectTypeOf(features.magnitude).toEqualTypeOf(String)
    expectTypeOf(features[0].mag_type).toEqualTypeOf(String)
    expectTypeOf(features[0].attributes.coordinates.latitude).toEqualTypeOf(Number)
    expectTypeOf(features[0].links.external_url).toEqualTypeOf(String);

  });
});
