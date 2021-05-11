import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | link-button', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:link-button');
    assert.ok(route);
  });
});
