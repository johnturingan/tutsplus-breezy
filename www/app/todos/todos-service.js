angular.module('breezy')

.service('TodosService', function($http, $q) {
	
	return {
		_todosData: [],
		
		getTodosData: function() {
			return this._todosData;
		},
		
		getTodos: function() {
			var deferred = $q.defer(),
				that = this;
			$http({
				url: 'https://tutsplus-breezy.firebaseio.com/items.json',
				method: 'GET',
				responseType: 'json'
			})	
			.success(function(data) {
				deferred.resolve(data);
				that._todosData = data;
			})
			.error(function(err) {
				deferred.reject(err);
			})
			return deferred.promise;
		}
	}
})
