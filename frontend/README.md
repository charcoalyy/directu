# React + TypeScript + Vite Starter

This template provides a custom setup to get React working in Vite with HMR and some ESLint rules.

## Development

To install dependencies, run
`npm i`

To run the app [locally](http://localhost:5173/), run
`npm run dev`

To build the environment, run
`npm run build`

## App Structure

This template follows atomic design principles, with file separation as follows:

- `/src/api` - all API calls
- `/src/components` - all page components
  - `src/components/atoms` - reusable singular elements with custom visuals
  - `src/components/forms` - all form content and submission logic, recommended integration with [react-hook-form](https://www.react-hook-form.com/)
  - `src/components/molecules` - reusable groups of atoms that come in sets
  - `src/components/organisms` - reusable groups of molecules that appear on templates
  - `src/components/templates` - reusable wireframes for pages
- `/src/constants` - global constants, including types
- `/src/context` - global states
- `/src/hooks` - all custom hooks
- `/src/pages` - all unique pages
- `/src/styles` - global CSS and UI library theming

## Styling

This template uses the [Mantine React Components Library](https://mantine.dev/) as basis for all UI.
