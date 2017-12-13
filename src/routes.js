function Routes(FEATURE_DIR, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: FEATURE_DIR + '/home/home.view.html',
            controller: 'HomeController'
        })
        .state('detail', {
            url: '/detail',
            templateUrl: FEATURE_DIR + 'detail/detail.view.html'
        });

    $urlRouterProvider.otherwise('/');
}

Routes.$inject = ['FEATURE_DIR', '$stateProvider', '$urlRouterProvider'];
app.config(Routes);