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
        var todo = {
            title: $scope.newTodo.trim(),
            completed: false
        };

        $scope.todos.push(todo);
        $scope.newTodo = ''; // reset input field
    };
}]);
