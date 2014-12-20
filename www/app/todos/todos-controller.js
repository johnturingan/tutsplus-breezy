angular.module('breezy')

.controller('TodosController', function($scope) {

	console.log('TodosController loaded!');

	$scope.actionState = {
		showDelete: false
	};

	$scope.todos = [
		{
			id: '1',
			name: 'Item 1'
		},
		{
			id: '2',
			name: 'Item 2'
		},
		{
			id: '3',
			name: 'Item 3'
		},
		{
			id: '4',
			name: 'Item 4'
		}
	];

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
