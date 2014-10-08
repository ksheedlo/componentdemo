'use strict';

describe('Service: thingListItemConfig2', function () {

  // load the service's module
  beforeEach(module('componentdemoApp'));

  // instantiate service
  var thingListItemConfig2;
  beforeEach(inject(function (_thingListItemConfig2_) {
    thingListItemConfig2 = _thingListItemConfig2_;
  }));

  it('should do something', function () {
    expect(!!thingListItemConfig2).toBe(true);
  });

});
