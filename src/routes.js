function Routes(FEATURE_DIR, $stateProvider, $urlRouterProvider) {

    var routes = [
        {
            name: 'master',
            abstract: true,
            templateUrl: FEATURE_DIR + '/master/master.view.html'
        },
        {
            name: 'search',
            parent: 'master',
            url: '/',
            templateUrl: FEATURE_DIR + '/search/search.view.html',
            controller: 'SearchController',
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
                    return $resource(BASE_URL + '/users/:username', {username: '@username'})
                            .get({ username: $stateParams.username })
                            .$promise.then(
                                function(response) {
                                    return response;
                                },
                                function(error) {
                                    return error;
                                }
                            );
                }]
            }
        },
        {
            name: 'repos',
            parent: 'master',
            url: '/detail/:username/repos',
            templateUrl: FEATURE_DIR + '/repos/repos.view.html',
            controller: 'ReposController',
            controllerAs: 'vm',
            resolve: {
                reposResponse: ['BASE_URL', '$resource', '$stateParams', function(BASE_URL, $resource, $stateParams) {
                    return $resource(BASE_URL + '/users/:username/repos', {username: '@username'})
                            .query({ username: $stateParams.username })
                            .$promise.then(
                                function(response) {
                                    return response;
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