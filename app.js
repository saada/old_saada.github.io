angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {	
  	$scope.themes = [
        'readable',
        'flatly',
        'cerulean',
        'cosmo',
        'cyborg',
        'darkly',
        'journal',
        'lumen',
        'paper',
        'sandstone',
        'simplex',
        'slate',
        'spacelab',
        'superhero',
        'united',
        'yeti'
    ];
    $scope.currentTheme = 'superhero';	//default theme

    $scope.setTheme = function(theme){
    	$scope.currentTheme = theme;
    };

	var responsePromise = $http.get('https://api.github.com/users/saada/starred');

    responsePromise.success(function(data) {
		console.log(data);
        $scope.recentlyStarredRepos = data;
    });
}]);