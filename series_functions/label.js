var alter = require('../lib/alter.js');
var util = require('util');

var Chainable = require('../lib/classes/chainable');
module.exports = new Chainable('label', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    },
    {
      name: 'label',
      types: ['string']
    }
  ],
  help: 'Change the label of the series. Use %s reference the existing label',
  fn:  function labelFn(args) {
    return alter(args, function (inputSeries, label) {
      if (label.indexOf('%s') !== -1) {
        inputSeries.label =  util.format(label, inputSeries.label);
      } else {
        inputSeries.label =  label;
      }

      return inputSeries;
    });
  }
});
