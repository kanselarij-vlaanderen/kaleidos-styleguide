import Route from '@ember/routing/route';

export default class NavbarRoute extends Route {
  model() {
    // Normally we would query store here, but for now, we get the mocks
    return null;
  }
}