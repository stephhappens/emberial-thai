import { moduleForModel, test } from 'ember-qunit';

moduleForModel('menu-category', 'Unit | Model | menu category', {
  // Specify the other units that are required for this test.
  needs: ['model:menu-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
