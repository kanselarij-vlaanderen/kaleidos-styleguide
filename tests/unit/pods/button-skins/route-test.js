import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | button-skins', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:button-skins');
    assert.ok(route);
  });
});
