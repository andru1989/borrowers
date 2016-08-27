import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //return this.store.findAll('friend');
    //return this.store.query('friend', {include: 'loans'});

    return this.store.query('friend', { include: 'loans,loans.article' });
  }
});
