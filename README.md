# kaleidos-styleguide

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd kaleidos-styleguide`
* `npm install`

## Running / Development

* `ember serve`
* Visit the styleguide at [http://localhost:3100](http://localhost:3100).
* Visit your tests at [http://localhost:3100/tests](http://localhost:3100/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Deploying

* `ember deploy production`
* Visit the styleguide at [https://kanselarij-vlaanderen.github.io/kaleidos-styleguide](https://kanselarij-vlaanderen.github.io/kaleidos-styleguide/) (emptying your browser cache & doing a hard reload can be needed in order to view deployed changes).

## FAQ

**Question:** When deploying a 'gh-pages exited with nonzero status' is returned.

**Answer:** Set the upstream 'gh-pages' branch as followed: `git branch --set-upstream-to=origin/gh-pages gh-pages`.
