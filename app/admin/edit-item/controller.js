import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formObject) {
      if (formObject.name) {
        this.model.setProperties(formObject)

        this.model.save()
          .then(() => {
            alert('Item Saved!');
            this.transitionToRoute('admin.category');
          });
        }
      },
    },
});
