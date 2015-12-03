githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
          // 'access_token': 'ced3173e38c3c84da822ff479b47201281b9994c'
        }
      });
    }
  };
}]);