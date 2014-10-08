'use strict';

describe('Service: Reflux', function () {

  // load the service's module
  beforeEach(module('componentdemoApp'));

  // instantiate service
  var Reflux;
  beforeEach(inject(function (_Reflux_) {
    Reflux = _Reflux_;
  }));

  it('should do something', function () {
    expect(!!Reflux).toBe(true);
  });

});
