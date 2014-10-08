'use strict';

describe('Directive: rsPopover', function () {

  // load the directive's module and view
  beforeEach(module('componentdemoApp'));
  beforeEach(module('components/rs/rs-popover/rs-popover.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rs-popover></rs-popover>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the rsPopover directive');
  }));
});