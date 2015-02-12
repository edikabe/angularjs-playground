// déclaration du module
var myAppModule = angular.module('myApp', []);

// ajout d'un filtre au module
myAppModule.filter('greet', function() {
  return function(name) {
     return 'Hello, ' + name + '!';
  };
});
