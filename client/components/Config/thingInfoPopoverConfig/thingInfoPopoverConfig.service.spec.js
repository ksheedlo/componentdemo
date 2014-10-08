'use strict';

describe('Service: thingInfoPopoverConfig', function () {

  // load the service's module
  beforeEach(module('componentdemoApp'));

  // instantiate service
  var thingInfoPopoverConfig;
  beforeEach(inject(function (_thingInfoPopoverConfig_) {
    thingInfoPopoverConfig = _thingInfoPopoverConfig_;
  }));

  it('should do something', function () {
    expect(!!thingInfoPopoverConfig).toBe(true);
  });

});
