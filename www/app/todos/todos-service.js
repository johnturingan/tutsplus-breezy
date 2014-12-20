angular.module('breezy')

.service('TodosService', function() {

	return {

		_todosData: [
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
		],
		getTodosData: function() {
			return this._todosData;
		},
		getTodos: function() {
			return this.getTodosData();
		}
	}

})
