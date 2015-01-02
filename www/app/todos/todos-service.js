angular.module('breezy')

.service('TodosService', function($http, $q, DSCacheFactory) {
	
	return {
		_todosData: [],
		
		todosCache: DSCacheFactory.get('todosCache'),

		getTodosData: function() {
			return this._todosData;
		},
		
		getTodos: function() {
			
			var deferred = $q.defer(),
				todos = this.todosCache.get('todos'),
				that = this;

			if(todos != undefined) {
				console.log('todos from cache!');
				deferred.resolve(todos);
			} else {
				$http({
					url: 'https://tutsplus-breezy.firebaseio.com/items.json',
					method: 'GET',
					responseType: 'json'
				})	
				.success(function(data) {
					console.log('todos from http!');
					that.todosCache.put('todos', data);
					deferred.resolve(data);
					that._todosData = data;
				})
				.error(function(err) {
					deferred.reject(err);
				})
			}
			return deferred.promise;
		}
	}
})
