function Routes(FEATURE_DIR, $stateProvider, $urlRouterProvider) {

    var routes = [
        {
            name: 'master',
            abstract: true,
            templateUrl: FEATURE_DIR + '/master/master.view.html'
        },
        {
            name: 'home',
            parent: 'master',
            url: '/',
            templateUrl: FEATURE_DIR + '/home/home.view.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        },
        {
            name: 'detail',
            parent: 'master',
            url: '/detail/:username',
            templateUrl: FEATURE_DIR + '/detail/detail.view.html',
            controller: 'DetailController',
            controllerAs: 'vm',
            resolve: {
                detailResponse: ['BASE_URL', '$resource', '$stateParams', function(BASE_URL, $resource, $stateParams) {
                    var User = $resource(BASE_URL + '/users/:username', {username: '@username'});
                    return User.get({ username: $stateParams.username })
                        .$promise.then(
                            function(user) {
                                return user;
                            },
                            function(error) {
                                return error;
                            }
                    );
                }]
            }
        }
    ];

    routes.forEach(function(route) {
        $stateProvider.state(route);
    });

    $urlRouterProvider.otherwise('/');
}

Routes.$inject = ['FEATURE_DIR', '$stateProvider', '$urlRouterProvider'];
app.config(Routes);