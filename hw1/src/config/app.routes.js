(function() {
  'use strict';

  app.config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.

      state('page1', {
        url: '/',
        templateUrl: 'page1.html',
        controller: 'page1Controller',
      })
  }

})();


