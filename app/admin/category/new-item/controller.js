import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formObject) {
      if (formObject.name) {
        const item = this.store.createRecord('menu-item', formObject);
        item.set('menuCategory', this.model)

        item.save()
          .then(() => {
            alert('Menu Item Saved!');
            this.transitionToRoute('/');
          });
      }
    },
  },
});
