angular.module('breezy', ['ionic', 'angular-data.DSCacheFactory'])

.run(function($ionicPlatform, DSCacheFactory) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
    DSCacheFactory('todosCache', { storageMode: 'localStorage', maxAge: 5000000, deleteOnExpire: 'aggressive' });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/app.html'
        })
        .state('app.todos', {
        	url: '/todos',
        	views: {
                'appview': {
                    templateUrl: 'app/todos/todos.html',
                    controller: 'TodosController'
                }
            }
        })
    $urlRouterProvider.otherwise('/app/todos');
})
