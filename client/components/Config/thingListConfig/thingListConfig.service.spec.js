'use strict';

describe('Service: thingListConfig', function () {

  // load the service's module
  beforeEach(module('componentdemoApp'));

  // instantiate service
  var thingListConfig;
  beforeEach(inject(function (_thingListConfig_) {
    thingListConfig = _thingListConfig_;
  }));

  it('should do something', function () {
    expect(!!thingListConfig).toBe(true);
  });

});
