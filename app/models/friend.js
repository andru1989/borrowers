import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import changeGate from 'ember-computed-change-gate/change-gate';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  twitter: attr('string'),
  loans: hasMany('loan'),
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    },
    set(key, value) {
      var name = value.split(' ');

      this.set('firstName', name[0]);
      this.set('lastName', name[1]);

      return value;
    }
  }),
  capitalizedFirstName: changeGate('firstName', function(firstName) {
    return Ember.String.capitalize(firstName);
  })
});
