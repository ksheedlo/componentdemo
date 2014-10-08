'use strict';

describe('Directive: rsListItem', function () {

  // load the directive's module and view
  beforeEach(module('componentdemoApp'));
  beforeEach(module('components/rs/rs-list-item/rs-list-item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rs-list-item></rs-list-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the rsListItem directive');
  }));
});