import { moduleForModel, test } from 'ember-qunit';

moduleForModel('menu-item', 'Unit | Model | menu item', {
  // Specify the other units that are required for this test.
  needs: ['model:menu-category']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
