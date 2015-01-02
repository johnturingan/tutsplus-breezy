angular.module('breezy')

.controller('TodosController', function($scope, $timeout, TodosService) {

	console.log('TodosController loaded!');

	$scope.actionState = {
		showDelete: false
	};

	// dynamically get data from the service
	// and assign to $scope.todos
	TodosService.getTodos().then(function(todos) {
		$scope.todos = todos;
	})
	
	$scope.completeTodo = function(item) {
		console.log(item);
	}

	$scope.shareTodo = function(item) {
		console.log(item);
	}

	$scope.deleteTodo = function($index) {
		$scope.todos.splice($index, 1);
		console.log($index);
	}

});
