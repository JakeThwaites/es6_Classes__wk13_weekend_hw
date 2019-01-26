// const InstrumentFamilies = require('./models/instrument_families.js');
// const SelectView = require('./views/select_view.js');
import SelectView from './views/select_view.js';
// const InstrumentFamilyView = require('./views/instrument_family_view.js');
import InstrumentFamilyView from './views/instrument_family_view.js';
// const data = require('./data/instrument_families.js');
import data from './data/instrument_families.js';
import InstrumentFamilies from './models/instrument_families.js';

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  // const familyDropdown = new SelectView(selectElement);
  // familyDropdown.bindEvents();

  SelectView.bindEvents(selectElement);

  const familyContainer = document.querySelector('div#instrument-family');
  // InstrumentFamilyView.bindEvents(familyContainer)

  // const instrumentFamilyView = new InstrumentFamilyView(familyContainer);
  InstrumentFamilyView.bindEvents(familyContainer);

  InstrumentFamilies.bindEvents(data);
});
