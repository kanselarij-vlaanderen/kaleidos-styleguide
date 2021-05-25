import {
  module, test
} from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | link-button', (hooks) => {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:link-button');
    assert.ok(route);
  });
});
