angular.module('myApp', [])
  .controller('MyController', ['$scope', function($scope) {	
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
    $scope.currentTheme = 'readable';	//default theme

    $scope.setTheme = function(theme){
    	$scope.currentTheme = theme;
    };
}]);