import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alert-skins', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alert-skins');
    assert.ok(route);
  });
});
