import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('category', function() {
      // Creates a new... Menu Category
      this.route('new');

      // Shows the detail page for Menu Category with `id` detail_id
      this.route('detail', { path: '/:detail_id'});

      // Shows the form to create a new Menu Item for Menu Category with `id` menu-category_id
      this.route('new-item', { path: '/:menu-category_id/new-item'});
    });
    this.route('edit_item');
  });
});

export default Router;
