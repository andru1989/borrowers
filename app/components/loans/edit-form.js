import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  articles: Ember.computed({
    get() {
      return this.get('store').findAll('article');
    }
  }).readOnly(),
  //
  // Save and cancel are not declared inside actions key, we'll be // using it as closure actions.
  //
  save() {
    //
    // We probably want to verify here that the model has an article // before saving
    //
    this.get('model').save().then((model) => {
      this.back(model.get('friend'));
    }, () => {
      this.set('errorMessage', 'there was something wrong saving the loan');
    });
  },
  cancel() {
    this.back(this.get('model.friend'));
  }
});
