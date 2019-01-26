// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js';

// const SelectView = function (element) {
//   this.element = element;
// };

class SelectView {
  constructor(element){
    this.element = element;
  }


  static bindEvents(element){
    this.element = element;
    // import
    PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
      const allInstrumentFamilies = evt.detail;
      this.populate(allInstrumentFamilies);
    });

    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });
  }

  // SelectView.prototype.bindEvents = function () {
  //   // import
  //   PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
  //     const allInstrumentFamilies = evt.detail;
  //     this.populate(allInstrumentFamilies);
  //   });
  //
  //   this.element.addEventListener('change', (evt) => {
  //     const selectedIndex = evt.target.value;
  //     PubSub.publish('SelectView:change', selectedIndex);
  //   });
  // };

  static populate(instrumentFamilyData){
    instrumentFamilyData.forEach((familiy, index) => {
      const option = document.createElement('option');
      option.textContent = familiy.name;
      option.value = index;
      this.element.appendChild(option);
    });
  };
}

  // SelectView.prototype.populate = function (instrumentFamilyData) {
  //   instrumentFamilyData.forEach((familiy, index) => {
  //     const option = document.createElement('option');
  //     option.textContent = familiy.name;
  //     option.value = index;
  //     this.element.appendChild(option);
  //   });
  // };

export default SelectView;
// module.exports = SelectView;
