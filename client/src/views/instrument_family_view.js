// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js';

// const InstrumentFamilyView = function (container) {
//   this.container = container;
// };

class InstrumentFamilyView {
  constructor() {
    this.container = container;
  }


  static bindEvents(container){
    this.container = container;
    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
      const instrumentFamily = evt.detail;
      InstrumentFamilyView.render(instrumentFamily);
    });
  }

  // InstrumentFamilyView.prototype.bindEvents = function () {
  //   PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
  //     const instrumentFamily = evt.detail;
  //     this.render(instrumentFamily);
  //   });
  // };

  static createElement(elementType, text){
      const element = document.createElement(elementType);
      element.textContent = text;
      return element;
  }

  static render({name, description, instruments}){
    this.container.innerHTML = '';

    const familyName = InstrumentFamilyView.createElement('h2', name);
    this.container.appendChild(familyName);

    const familyDescription = InstrumentFamilyView.createElement('p', description);
    this.container.appendChild(familyDescription);

    const instrumentListTitle = InstrumentFamilyView.createElement('h3', 'Instruments include:');
    this.container.appendChild(instrumentListTitle);

    const instrumentList = InstrumentFamilyView.createInstrumentList(instruments);
    this.container.appendChild(instrumentList);
  }

  // InstrumentFamilyView.prototype.render = function (family) {
  //   this.container.innerHTML = '';
  //
  //   const familyName = this.createElement('h2', family.name);
  //   this.container.appendChild(familyName);
  //
  //   const familyDescription = this.createElement('p', family.description);
  //   this.container.appendChild(familyDescription);
  //
  //   const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  //   this.container.appendChild(instrumentListTitle);
  //
  //   const instrumentList = this.createInstrumentList(family.instruments);
  //   this.container.appendChild(instrumentList);
  // };



  // InstrumentFamilyView.prototype.createElement = function (elementType, text) {
  //   const element = document.createElement(elementType);
  //   element.textContent = text;
  //   return element;
  // };

  static createInstrumentList(instruments){
    const list = document.createElement('ul');

    instruments.forEach((instrument) => {
      const listItem = document.createElement('li');
      listItem.textContent = instrument;
      list.appendChild(listItem);
    });

    return list;
  }

  // InstrumentFamilyView.prototype.createInstrumentList = function (instruments) {
  //   const list = document.createElement('ul');
  //
  //   instruments.forEach((instrument) => {
  //     const listItem = document.createElement('li');
  //     listItem.textContent = instrument;
  //     list.appendChild(listItem);
  //   });
  //
  //   return list;
  // };
}

export default InstrumentFamilyView;
// module.exports = InstrumentFamilyView;
