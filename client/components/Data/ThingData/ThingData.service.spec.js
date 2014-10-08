'use strict';

describe('Service: ThingData', function () {

  // load the service's module
  beforeEach(module('componentdemoApp'));

  // instantiate service
  var ThingData;
  beforeEach(inject(function (_ThingData_) {
    ThingData = _ThingData_;
  }));

  it('should do something', function () {
    expect(!!ThingData).toBe(true);
  });

});
