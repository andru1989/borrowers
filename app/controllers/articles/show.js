import Ember from 'ember';

export default Ember.Controller.extend({
  delete(article) {
    article.destroyRecord().then(() => {
      this.transitionToRoute('articles.index');
    });
  }
});
