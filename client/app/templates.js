angular.module('componentdemoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/account/login/login.html',
    "<div class=container><div class=row><div class=col-sm-12><h1>Login</h1><p>Accounts are reset on server restart from <code>server/config/seed.js</code>. Default account is <code>test@test.com</code> / <code>test</code></p><p>Admin account is <code>admin@admin.com</code> / <code>admin</code></p></div><div class=col-sm-12><form class=form name=form ng-submit=login(form) novalidate><div class=form-group><label>Email</label><input type=email name=email class=form-control ng-model=user.email required></div><div class=form-group><label>Password</label><input type=password name=password class=form-control ng-model=user.password required></div><div class=\"form-group has-error\"><p class=help-block ng-show=\"form.email.$error.required && form.password.$error.required && submitted\">Please enter your email and password.</p><p class=help-block ng-show=\"form.email.$error.email && submitted\">Please enter a valid email.</p><p class=help-block>{{ errors.other }}</p></div><div><button class=\"btn btn-inverse btn-lg btn-login\" type=submit>Login</button> <a class=\"btn btn-default btn-lg btn-register\" href=/signup>Register</a></div></form></div></div><hr></div>"
  );


  $templateCache.put('app/account/settings/settings.html',
    "<div class=container><div class=row><div class=col-sm-12><h1>Change Password</h1></div><div class=col-sm-12><form class=form name=form ng-submit=changePassword(form) novalidate><div class=form-group><label>Current Password</label><input type=password name=password class=form-control ng-model=user.oldPassword mongoose-error><p class=help-block ng-show=form.password.$error.mongoose>{{ errors.other }}</p></div><div class=form-group><label>New Password</label><input type=password name=newPassword class=form-control ng-model=user.newPassword ng-minlength=3 required><p class=help-block ng-show=\"(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || submitted)\">Password must be at least 3 characters.</p></div><p class=help-block>{{ message }}</p><button class=\"btn btn-lg btn-primary\" type=submit>Save changes</button></form></div></div></div><div class=container><div class=row><div class=col-lg-12></div></div></div>"
  );


  $templateCache.put('app/account/signup/signup.html',
    "<div class=container><div class=row><div class=col-sm-12><h1>Sign up</h1></div><div class=col-sm-12><form class=form name=form ng-submit=register(form) novalidate><div class=form-group ng-class=\"{ 'has-success': form.name.$valid && submitted,\n" +
    "                                            'has-error': form.name.$invalid && submitted }\"><label>Name</label><input name=name class=form-control ng-model=user.name required><p class=help-block ng-show=\"form.name.$error.required && submitted\">A name is required</p></div><div class=form-group ng-class=\"{ 'has-success': form.email.$valid && submitted,\n" +
    "                                            'has-error': form.email.$invalid && submitted }\"><label>Email</label><input type=email name=email class=form-control ng-model=user.email required mongoose-error><p class=help-block ng-show=\"form.email.$error.email && submitted\">Doesn't look like a valid email.</p><p class=help-block ng-show=\"form.email.$error.required && submitted\">What's your email address?</p><p class=help-block ng-show=form.email.$error.mongoose>{{ errors.email }}</p></div><div class=form-group ng-class=\"{ 'has-success': form.password.$valid && submitted,\n" +
    "                                            'has-error': form.password.$invalid && submitted }\"><label>Password</label><input type=password name=password class=form-control ng-model=user.password ng-minlength=3 required mongoose-error><p class=help-block ng-show=\"(form.password.$error.minlength || form.password.$error.required) && submitted\">Password must be at least 3 characters.</p><p class=help-block ng-show=form.password.$error.mongoose>{{ errors.password }}</p></div><div><button class=\"btn btn-inverse btn-lg btn-login\" type=submit>Sign up</button> <a class=\"btn btn-default btn-lg btn-register\" href=/login>Login</a></div></form></div></div><hr></div>"
  );


  $templateCache.put('app/admin/admin.html',
    "<div class=container><p>The delete user and user index api routes are restricted to users with the 'admin' role.</p><ul class=list-group><li class=list-group-item ng-repeat=\"user in users\"><strong>{{user.name}}</strong><br><span class=text-muted>{{user.email}}</span> <a ng-click=delete(user) class=trash><span class=\"glyphicon glyphicon-trash pull-right\"></span></a></li></ul></div>"
  );


  $templateCache.put('app/main/main.html',
    "<div class=container><div class=row><div class=col-lg-8><h1 class=page-header>List: All Things</h1><rs-list config=thingListConfig><rs-list-item config=thingListItemConfig ng-repeat=\"thing in things\"><div class=rs-list-primary><div class=rs-tile-content><h2>{{thing.name}}</h2><p ng-click=closeAll() ng-bind-html=thing.info></p></div></div><div class=rs-list-secondary><div class=btn-group><button type=button class=\"btn btn-sm btn-default\" ng-click=deleteThing(thing)><i class=\"fa fa-times\"></i> Remove</button></div></div></rs-list-item></rs-list></div><div class=col-lg-4><form class=\"thing-form well\"><label>Add a new thing</label><div class=form-group><label>Name</label><input class=form-control placeholder=\"Add a new thing here.\" ng-model=newThing.name></div><div class=form-group><label>Info</label><input class=form-control placeholder=\"Add some info to your thing.\" ng-model=newThing.info></div><p class=form-group><button type=submit class=\"btn btn-primary\" ng-click=addThing()>Add New</button></p></form></div></div></div><footer class=footer><div class=container><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href=\"https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open\">Issues</a></p></div></footer>"
  );


  $templateCache.put('components/navbar/navbar.html',
    "<div class=\"navbar navbar-default navbar-static-top\" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click=\"isCollapsed = !isCollapsed\"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=\"/\" class=navbar-brand>componentdemo</a></div><div collapse=isCollapsed class=\"navbar-collapse collapse\" id=navbar-main><ul class=\"nav navbar-nav\"><li ng-repeat=\"item in menu\" ng-class=\"{active: isActive(item.link)}\"><a ng-href={{item.link}}>{{item.title}}</a></li><li ng-show=isAdmin() ng-class=\"{active: isActive('/admin')}\"><a href=/admin>Admin</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li ng-hide=isLoggedIn() ng-class=\"{active: isActive('/signup')}\"><a href=/signup>Sign up</a></li><li ng-hide=isLoggedIn() ng-class=\"{active: isActive('/login')}\"><a href=/login>Login</a></li><li ng-show=isLoggedIn()><p class=navbar-text>Hello {{ getCurrentUser().name }}</p></li><li ng-show=isLoggedIn() ng-class=\"{active: isActive('/settings')}\"><a href=/settings><span class=\"glyphicon glyphicon-cog\"></span></a></li><li ng-show=isLoggedIn() ng-class=\"{active: isActive('/logout')}\"><a href=\"\" ng-click=logout()>Logout</a></li></ul></div></div></div>"
  );


  $templateCache.put('components/rs/rs-list-item/rs-list-item.html',
    "<div>this is the rsListItem directive</div>"
  );


  $templateCache.put('components/rs/rs-list/rs-list.html',
    "<div>this is the rsList directive</div>"
  );

}]);
