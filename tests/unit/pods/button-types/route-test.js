import {
  module, test
} from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | button-types', (hooks) => {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:button-types');
    assert.ok(route);
  });
});
