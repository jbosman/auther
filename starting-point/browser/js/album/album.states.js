'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    // templateUrl: '/js/album/templates/albums.html',
    template: '<my-albums data="albums"></my-albums>',
    controller: 'AlbumsCtrl',
    resolve: {
      allAlbums: function (AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    }
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    templateUrl: '/js/album/templates/album.html',
    controller: 'AlbumCtrl',
    resolve: {
      theAlbum: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });

});
