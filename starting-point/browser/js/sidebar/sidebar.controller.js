'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  // nothing to see here for now… state transitions happening with ui-sref!

});

juke.directive('mySidebar', function(){
	var obj = {}

	obj.restrict = "E";

	obj.templateUrl = "js/sidebar/template/sidebar.html";
	//obj.templateUrl = "/template/sidebar.html";

	obj.scope;

	return obj;
})
