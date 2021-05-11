import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alert-stack', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alert-stack');
    assert.ok(route);
  });
});
