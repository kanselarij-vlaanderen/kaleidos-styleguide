import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | button-loading', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:button-loading');
    assert.ok(route);
  });
});
