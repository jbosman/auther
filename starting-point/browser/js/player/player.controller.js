/* global juke */
'use strict';

// juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

//   angular.extend($scope, PlayerFactory); // copy props from param2 to param1

//   $scope.toggle = function () {
//     if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
//     else PlayerFactory.resume();
//   };

//   $scope.getPercent = function () {
//     return PlayerFactory.getProgress() * 100;
//   };

//   $scope.handleProgressClick = function (evt) {
//     PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
//   };

// });

juke.directive('myPlayer', function(PlayerFactory){
  var obj = {};

  // console.log("myPlayer directive")

  obj.restrict = 'E';
  obj.templateUrl = '/js/player/template/player.html'
  // obj.scope = {
  //   data: '='
  // }
  obj.link = function(scope){
    angular.extend(scope, PlayerFactory);

    scope.toggle = function () {
      if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
      else PlayerFactory.resume();
    };

    scope.getPercent = function () {
      return PlayerFactory.getProgress() * 100;
    };

    scope.handleProgressClick = function (evt) {
      PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
    };
  };

  return obj;
});
