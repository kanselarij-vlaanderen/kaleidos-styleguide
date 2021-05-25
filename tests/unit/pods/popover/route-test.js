import {
  module, test
} from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | popover', (hooks) => {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:popover');
    assert.ok(route);
  });
});
