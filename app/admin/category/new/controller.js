import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formObject) {
      if (formObject.name) {
        const category = this.store.createRecord('menu-category', formObject);

        category.save()
          .then(() => {
            alert('Category Saved!');
            this.transitionToRoute('/');
          });
      }
    },
  },
});
