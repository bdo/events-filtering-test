import moment from 'moment'

import {
  formatInputDate,
  parseInputDate,
  formatEventDate,
  parseEventDate
} from '../../../src/utils/date-utils'

describe('date-utils', () => {

  describe('formatInputDate', () => {

    it('formats the date into the input\'s format', () => {
      const date = moment('2016-12-25T00:00');
      const text = formatInputDate(date);
      expect(text).to.eq('25/12/2016 00:00');
    });

  });

  describe('parseInputDate', () => {

    it('parses the date from the input\'s format', () => {
      const text = '25/12/2016 00:00';
      const m = parseInputDate(text);
      expect(m.toISOString()).to.eq(moment('2016-12-25T00:00').toISOString());
    });

  });

  describe('formatEventDate', () => {

    it('formats the date into the event\'s format', () => {
      const date = moment('2016-12-25T00:00');
      const text = formatEventDate(date);
      expect(text).to.eq('25 Dec 00:00');
    });

  });

  describe('parseEventDate', () => {

    it('parses the date from the event\'s format', () => {
      const text = '2016-12-25T00:00:00Z';
      const m = parseEventDate(text);
      expect(m.toISOString()).to.eq(moment('2016-12-25T00:00:00Z').toISOString());
    });

  });

});
