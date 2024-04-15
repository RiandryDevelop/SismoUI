import { http } from "msw";

const jsonMock = [{
    data: [
        {
          id: 1,
          type: 'feature',
          attributes: {
            external_id: 'nc74031526',
            magnitude: 0.78,
            place: '5 km NW of The Geysers, CA',
            time: '2024-04-09 00:26:03',
            tsunami: false,
            mag_type: 'md',
            title: 'M 0.8 - 5 km NW of The Geysers, CA',
            coordinates: {
              longitude: -122.7965012,
              latitude: 38.8105011
            }
          },
          links: {
            external_url: 'https://earthquake.usgs.gov/earthquakes/eventpage/nc74031526'
          }
        }
      ],
      pagination: {
        current_page: 1,
        total: 1,
        per_page: 10
      }
}]
export const handlers = [
    
     http.get('http://localhost:3000/api/features', (req, res, ctx) => {
        return ctx.json(jsonMock)
    }),

    
    http.get('http://localhost:3000/api/magTypes', (req, res, ctx) => {
    
    return res(
      ctx.json(['md', 'ml', 'ms', 'mw']) 
    );
  }),
  
  http.get('http://localhost:3000/api/perPageOptions', (req, res, ctx) => {
    return res(
      ctx.json([10, 20, 50]) 
    );
  })
]
