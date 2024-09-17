# Figma Parcel Plugin

This is a template for a Figma Design plugin that can be quickly generated using [`degit`](https://github.com/Rich-Harris/degit).
Typescript and React is supported out of the box.

## Getting started

Clone the project with `degit` and install the dependencies:

```sh
pnpx degit emmiep/figma-parcel-plugin target-folder
cd target-folder
pnpm install
```

Run the `start` task to watch and build the sources:

```sh
pnpm start
```

Import the plugin into Figma by clicking `Plugins > Development > Import plugin from manifest…` and selecting the `manifest.json` file.

The plugin also needs a unique ID.
Open the `Plugins` tab under the `Resources` pane and look up the new plugin (it should be called `YOUR PLUGIN NAME HERE`).
Open the `Publish` dialog by clicking `Publish` under the `…` menu.
Scroll down to the bottom and expand the _Advanced_ section, and click `Generate ID…`.
Replace the `id` property in `manifest.json` with the generated ID value.

Remember to also change the `name` property in `manifest.json`, and `name` and `author` in `package.json`.
