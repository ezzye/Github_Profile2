githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
          // 'access_token': '66ffff07ac77d26ee62d9d140cf8820af73a77dd'
        }
      });
    }
  };
}]);