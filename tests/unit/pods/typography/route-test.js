import {
  module, test
} from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | typography', (hooks) => {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:typography');
    assert.ok(route);
  });
});
