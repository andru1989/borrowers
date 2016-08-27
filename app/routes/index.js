import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    //return this.get('ajax').request('/friends').then(function(data) {
    return this.get(`${config.host}/friends`).then(function(data) {
      return {
        friendsCount: data.data.length
      };
    });
  }
});