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
    $scope.currentTheme = 'cerulean';	//default theme

    $scope.setTheme = function(theme){
    	$scope.currentTheme = theme;
    };

    $http.get('https://api.github.com/users/saada/starred').success(function(data) {
        $scope.recentlyStarredRepos = data;
    });
}]);


// animations
function animate(selector, animation) {
    $(selector)
        .addClass('animated ' + animation)
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated ' + animation); 
        });
}

$(function init(){
    animate('.jumbotron', 'fadeIn');
    animate('.jumbotron *', 'zoomIn');
});