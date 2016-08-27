import DS from 'ember-data';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.host
});
