const PubSub = require('../helpers/pub_sub.js');

class InstrumentFamilies {
  constructor(data) {
    this.data = data;
  }


  // const InstrumentFamilies = function (data) {
  //   this.data = data;
  // };

  static bindEvents(data){
    this.data = data;
    PubSub.publish('InstrumentFamilies:data-ready', this.data);

    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamilyDetail(selectedIndex);
    });
  }



  // InstrumentFamilies.prototype.bindEvents = function () {
  //   PubSub.publish('InstrumentFamilies:data-ready', this.data);
  //
  //   PubSub.subscribe('SelectView:change', (evt) => {
  //     const selectedIndex = evt.detail;
  //     this.publishFamilyDetail(selectedIndex);
  //   });
  // };


  static publishFamilyDetail(selectedIndex){
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  }

  // InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
  //   const selectedFamily = this.data[selectedIndex];
  //   PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  // };

}

// module.exports = InstrumentFamilies;
export default InstrumentFamilies;
