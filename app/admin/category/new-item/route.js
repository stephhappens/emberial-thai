import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('menu-category', params['menu-category_id']);
    return this.store.createRecord('menu-category');
  },
});
