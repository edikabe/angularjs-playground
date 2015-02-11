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
        var newTodo = {
            title: $scope.newTodo.trim(),
            completed: false
        };

        $scope.todos.push(newTodo);
    };
}]);
