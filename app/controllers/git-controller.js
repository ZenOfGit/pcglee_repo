angular.module('pcGlee')

    .controller('GitController', ['$scope', '$http', function($scope, $http) {
    
    var onComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };
        
    var onRepos = function(response){
        $scope.repos = response.data;
    };
    
    var onError = function(reason){
        $scope.error = "Could not find this account";
    };
    
    $scope.search = function(username){
    $http.get('https://api.github.com/users/' + username)
        .then(onComplete, onError);
    };
         
        $scope.username = 'zenofgit';
        $scope.message = 'GitHub Search';

}]);