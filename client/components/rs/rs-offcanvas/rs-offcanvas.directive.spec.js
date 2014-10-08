'use strict';

describe('Directive: rsOffcanvas', function () {

  // load the directive's module and view
  beforeEach(module('componentdemoApp'));
  beforeEach(module('components/rs/rs-offcanvas/rs-offcanvas.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rs-offcanvas></rs-offcanvas>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the rsOffcanvas directive');
  }));
});