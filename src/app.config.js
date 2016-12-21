routing.$inject = ['$urlRouterProvider'];

export default function routing($urlRouterProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}
