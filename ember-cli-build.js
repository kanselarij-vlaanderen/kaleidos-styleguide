'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: process.env.DEPLOY_ENV !== 'production',
    },
    sassOptions: {
      extension: 'scss',
      sourceMapEmbed: process.env.DEPLOY_ENV !== 'production',
      includePaths: [
        'node_modules/@kanselarij-vlaanderen/au-kaleidos-css/'
      ],
    },
  });

  app.import('node_modules/@kanselarij-vlaanderen/au-kaleidos-icons/iconfont/icons.css');

  const iconFiles = new Funnel('node_modules/@kanselarij-vlaanderen/au-kaleidos-icons/iconfont', {
    include: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
    destDir: '/assets',
  });

  const fontFiles = new Funnel('node_modules/@kanselarij-vlaanderen/au-kaleidos-css/fonts', {
    destDir: '/assets/fonts',
  });

  return app.toTree([iconFiles, fontFiles]);
};
