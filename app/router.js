import EmberRouter from '@ember/routing/router';
import config from 'kaleidos-styleguide/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });

  this.route('colors');
  this.route('accordion');
  this.route('alert-skins');
  this.route('alert-types');
  this.route('alert-stack');
  this.route('avatar');
  this.route('brand');
  this.route('badge');
  this.route('button-loading');
  this.route('button-skins');
  this.route('button-types');
  this.route('checkboxes-radio-buttons');
  this.route('color-badge');
  this.route('dropdown');
  this.route('empty-state');
  this.route('form-group');
  this.route('layout-grid');
  this.route('heading');
  this.route('icons');
  this.route('inputs');
  this.route('key-value');
  this.route('link-button');
  this.route('list');
  this.route('loader');
  this.route('panel');
  this.route('pager');
  this.route('pagination');
  this.route('popover');
  this.route('pill');
  this.route('status-pill');
  this.route('table');
  this.route('tabs');
  this.route('toolbar');
  this.route('navbar');
  this.route('modal');
  this.route('typography');
  this.route('upload');
});
