const AppConfig = function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  // $locationProvider.html5Mode(true); // enable HTML5 routing

  $stateProvider.state('life-cycle-hooks', {
    url: "/life-cycle-hooks",
    template: "<life-cycle-hooks-view></life-cycle-hooks-view>"
  });

  $urlRouterProvider.otherwise('/life-cycle-hooks');
};

export default AppConfig;
