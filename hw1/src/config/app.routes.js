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
      .state('page2', {
        url: '/page2',
        templateUrl: 'page2.html',
        controller: 'page2Controller',
      })
  }

})();


