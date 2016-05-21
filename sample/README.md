# {{projectName}}

{{projectDescription}}

## Pre-requirements

* [Node.js](https://nodejs.org/) >=5.4.0
* [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) installed globally

## Installation / update

* When installing for the first time you have to run `npm install && bower install`
* When pulling changes you may need to run `npm install` or `bower install` afterwards
* No need to run anything after initial project setup

## Launch

1. **Local development:**
    * `npm run serve` (runs the backend and local dev server)
2. **Production site:**
    * Update config file with actual `siteDomain` and `facebook.appUrl`
    * Build dist: `gulp`
    * Set virtual host root to `dist`
    * Start the backend `npm run start:forever`
    * Set up web server to proxy backend calls to `http://localhost:{{appPort}}`

## Useful commands

1. Local development server: `npm run serve`
2. Build production dist: `gulp`
3. Build stage dist: `gulp build:stage`
4. Run backend in foreground: `npm start`
5. Run backend as a forever process: `npm run start:forever`
6. Restart backend forever process: `npm run reload`

## Production deployment

1. `git pull`
2. Relaunch the backend if need: `npm run reload`
4. Rebuild dist: `gulp`

## Embedding the app

Application can be embedded into any site like this:

```html
<!-- For local development, replace example.com with something like localhost:9000 -->

<script src="http://example.com/loader.js" data-route="site.law" data-law-slug="test"></script>
```

You can pass any parameters to the app through script data attributes.
The example above will produce the next result inside the app:

```javascript
// `State` is service that can be injected
// It has the `embeddingParams` property that contains all external params

console.log( State.embeddingParams.route ); // "site.law"
console.log( State.embeddingParams.lawSlug ); // "test"
```

Read more about embedding params in the [GovRight documentation](http://govright.github.io/platform-services/docs/#/api/govright.platformServices.grEmbeddingParams).

## Localization Process

Localization works by matching translation points in the source to PO translation
files. The workflow is as follows,

1. Code and templates are produced with translation markers and codes.
2. `gulp pot` is run to parse code and templates and create a .POT file in the
   `po/` folder. The .POT file is a template for the translation process.
3. The .POT file is imported into a translation tool and translated into various
   languages. Each language produces a .PO file. This file should be copied into
   the `po/` folder.
4. `gulp translations` is run to parse the .PO files and convert them into
   Javascript files. These files are stored in app/translations/.
5. During runtime, translations are matched with translation markers and rendered
   according to active locale.

## Apache config

Check the document for details:
`GovRight documentation` > `Manuals` > `How to configure Apache for AngularJS based projects`
