import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | colecciones-libres', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:colecciones-libres');
    assert.ok(route);
  });
});
