/* global juke */
'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, theAlbum) {

  $scope.album = theAlbum;

  $scope.toggle = function (song) {
    console.log("got into album controller toggle()")
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, allAlbums) {

  $scope.albums = allAlbums;

});


juke.directive('myAlbums', function(){
  // console.log("got into myAlbums directive")

  var obj = {};
  obj.restrict = 'E';

  obj.templateUrl = '/js/album/templates/albums.html';

  obj.scope = {
    data: "="
  };

  obj.link = function(scope){
      // console.log("HEY")
      scope.albums = scope.data;
      // console.log("scope.data: ", scope.data);
  };

  return obj;
})











