'use strict';

describe('Service: thingListItemConfig', function () {

  // load the service's module
  beforeEach(module('componentdemoApp'));

  // instantiate service
  var thingListItemConfig;
  beforeEach(inject(function (_thingListItemConfig_) {
    thingListItemConfig = _thingListItemConfig_;
  }));

  it('should do something', function () {
    expect(!!thingListItemConfig).toBe(true);
  });

});
