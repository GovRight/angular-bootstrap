# Another awesome Angular project!

## Pre-reqs:

 - [Node.js](https://nodejs.org/) >=0.12.7

## Initial setup

Follow [this guide](INSTALL.md) for initial project setup.

## Installation

1. `npm install`

## Launch

1. **Local development:** ``npm run serve`` (runs the backend and local dev server)
2. **Production:** set virtual host root to `dist` and start the backend ``npm run start:forever``

## Useful commands

1. Local development server: ``npm run serve``
2. Build production dist: ``gulp``
3. Build stage dist: ``gulp build:stage``
4. Run backend: ``npm start``
5. Run backend with forever: ``npm run start:forever``
6. Build sitemap: ``gulp sitemap`` for production, ``gulp sitemap:stage`` for stage dist
7. Restart backend forever process: ``npm run reload``

## Production deployment

1. ``git pull``
2. Relaunch the backend if need: ``npm run reload``
4. Build dist: ``gulp``

## Localization Process

Localization works by matching translation points in the source to PO translation
files. The workflow is as follows,

1. Code and templates are produced with translation markers and codes.
2. ``gulp pot`` is run to parse code and templates and create a .POT file in the
   ``po/`` folder. The .POT file is a template for the translation process.
3. The .POT file is imported into a translation tool and translated into various
   languages. Each language produces a .PO file. This file should be copied into
   the ``po/`` folder.
4. ``gulp translations`` is run to parse the .PO files and convert them into
   Javascript files. These files are stored in app/translations/.
5. During runtime, translations are matched with translation markers and rendered
   according to active locale.
   
## Apache config

Check the document for details:
`GovRight documentation` > `Manuals` > `How to configure Apache for AngularJS based projects`
