'use strict';

juke.controller('SongChooseCtrl', function ($scope, SongFactory) {

  $scope.songs = [];

  SongFactory.fetchAll()
  .then(function (songs) {
    $scope.songs = songs;
  });

  $scope.reset = function () {
    $scope.toAdd = null;
  };

  $scope.addIt = function () {
    $scope.addSong($scope.toAdd)
    .then(function () {
      $scope.reset();
    });
  };

});

juke.directive('mySongs', function(PlayerFactory){
  console.log("got into mySongs directive");

  var obj = {};

  obj.restrict = 'E';

  obj.templateUrl = '/js/song/templates/songs.html';

  obj.scope = {
    artists: '=',
    songs: '='
  };

  obj.link = function(scope){
    

    angular.extend(scope, PlayerFactory);

    scope.artistsSongs = scope.songs;
    scope.songsArtists = scope.artists;

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
      // console.log("scope.data: ", scope.data)
  };

  return obj;
})

