var app = angular.module('myApp', []);
 
app.directive('chucknorris', function(){
    return{
        restrict: 'E', //Element (Tag)
        templateUrl : '/demos/02-creating_directive/chucknorris_template.html'
    };
});