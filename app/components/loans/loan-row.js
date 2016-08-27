import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  loan: null, // passed-in
  init() {
    this._super(...arguments);
    this.addObserver('loan.returned', this, this.stateChanged);
  },
  stateChanged: Ember.observer('loan.returned', function() {
    var loan = this.get('loan');
    console.log('OMG Expensive operation because loan state changed');
  })
});

