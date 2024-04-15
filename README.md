# sismo_ui

## Description

This project is the official frontend of the SismoAPP, an application that collects and delivers seismological data from around the world.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/RiandryDevelop/SismoUI.git
   ```

2. Navigate into the project directory:
   ```bash
   cd sismo_ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

To start the development server, run:
```bash
npm run dev
```
This command will start a development server using Vite.

### Building for Production

To build the project for production, run:
```bash
npm run build
```
This command will generate a production-ready build of the project.

### Previewing Production Build

To preview the production build locally, run:
```bash
npm run preview
```
This command will serve the production build locally.

## Testing

To run tests using Playwright, execute the following command:
```bash
npm run test
```

This command will execute the Playwright tests defined in the project.

## Project Structure

The project structure is as follows:
- `src/`: Contains the source code of the application.
- `public/`: Contains static assets and HTML template.

## Dependencies

This project relies on the following dependencies:
- React: ^18.2.0
- React-DOM: ^18.2.0

## Development Dependencies

The project utilizes several development dependencies for building, linting, and more:
- @types/react: ^18.2.66
- @types/react-dom: ^18.2.22
- @vitejs/plugin-react-swc: ^3.5.0
- autoprefixer: ^10.4.19
- eslint: ^8.57.0
- eslint-plugin-react: ^7.34.1
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.6
- postcss: ^8.4.38
- tailwindcss: ^3.4.3
- vite: ^5.2.0

## Versioning

The current version of this project is 0.0.0.

## How to use the endpoints and consume the application

## Endpoints

- **Get all features**
  - Endpoint: `GET /api/features`
  - Description: Retrieves a list of all features available in the system.

- **Get all comments of a particular feature**
  - Endpoint: `GET /api/comments/feature/:feature_id`
  - Description: Retrieves all comments associated with a specific feature identified by `feature_id`.

- **Create a comment**
  - Endpoint: `POST /api/comments`
  - Description: Creates a new comment for a feature.
  - Request Body: JSON object with the following parameters:
    - `feature_id`: ID of the feature the comment belongs to.
    - `body`: Text content of the comment.

- **Update a comment**
  - Endpoint: `PUT /api/comments/:comment_id`
  - Description: Updates an existing comment identified by `comment_id`.
  - Request Body: JSON object with the following parameter:
    - `body`: Updated text content of the comment.

- **Delete a comment**
  - Endpoint: `DELETE /api/comments/:comment_id`
  - Description: Deletes a comment identified by `comment_id`.

## Response Format

- Success Response: HTTP status code 200 OK for successful requests.
- Error Response: HTTP status codes indicating the type of error occurred, along with a relevant error message in the response body.

## Authentication

This API does not require authentication for accessing the endpoints. However, ensure proper authorization mechanisms are implemented in your application if needed.





