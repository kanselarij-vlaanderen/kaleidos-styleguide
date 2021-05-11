import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alert-types', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alert-types');
    assert.ok(route);
  });
});
