var app = angular.module('myApp', []);

app.controller('TodoCtrl', ['$scope', function($scope) {
    $scope.todos = [{
        completed: true,
        title: 'Finaliser la présentation'
    }, {
        completed: false,
        title: 'Organiser le quickie'
    }];

    $scope.addTodo = function() {
        if ($scope.newTodo === undefined || $scope.newTodo === '') { return; };

        var todo = {
            title: $scope.newTodo.trim(),
            completed: false
        };

        $scope.todos.push(todo);
        $scope.newTodo = ''; // reset input field
    };
}]);

app.filter('strike', function() {
  return function(input) {
    if (input.completed) {
      return input.title + ' \u2713';
    } else {
      return input.title + ' \u2718';
    }
  };
});
