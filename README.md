## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Notes to self & learning as I go

-   Uses vanilla js to manage form and form values.
    'ref' from solidJS just provides an easier way to get the element than by querying for it.

-   Something funny is happening with the photos store and hot reload - images seem to stay on reload
    but the values get out of sync. (i.e. images and previews stay but checkboxes uncheck).
    Current workaround: just remove all photos after a hot-reload.
    Maybe remove them on a cleanup since this is a true SPA? Also triple check checkbox binding.
