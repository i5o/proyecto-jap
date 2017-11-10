var appMod = angular.module('app', ['ui.router', 'app.campeones']);

appMod.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/listado');
    
    $stateProvider
        .state('listado', {
            url: '/listado',
            templateUrl: 'views/listado.html',
            controller: 'ControllerCampeones'
        })
        .state('campeon', {
          url: '/campeon/:campeon',
          templateUrl: 'views/campeon.html',
          controller: 'ControllerCampeon'
        });
});