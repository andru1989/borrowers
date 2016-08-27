import Ember from 'ember';

import { formatDate } from '../utils/date-helpers';

export default Ember.Helper.helper(function([date, format]) {
  return formatDate(date, format);
});