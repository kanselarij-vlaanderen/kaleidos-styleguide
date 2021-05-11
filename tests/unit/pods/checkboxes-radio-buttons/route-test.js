import {
  module, test
} from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | checkboxes-radio-buttons', (hooks) => {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:checkboxes-radio-buttons');
    assert.ok(route);
  });
});
