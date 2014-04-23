var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoController', function ($scope, $http) {


    $scope.todos = [
    { text: 'learn angularJS', done: false },
    { text: 'learn 30 technologies in 30 days', done: false }
  ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };


    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };

    $scope.clear2 = function () {

        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
           // console.log(todo);
            if (!todo.done) $scope.todos.push(todo);
        });
    };

});