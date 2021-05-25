import {
  module, test
} from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | table', (hooks) => {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:table');
    assert.ok(route);
  });
});
