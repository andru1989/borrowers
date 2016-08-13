import Ember from 'ember';

export default Ember.Controller.extend({
  save(model) {
    this.transitionToRoute('articles.show', model);
  },
  cancel(model) {
    this.transitionToRoute('articles.show', model);
  }
});