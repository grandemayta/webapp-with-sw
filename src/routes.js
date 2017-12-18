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
            name: 'user',
            parent: 'master',
            url: '/user/:username',
            templateUrl: FEATURE_DIR + '/user/user.view.html',
            controller: 'UserController',
            controllerAs: 'vm',
            resolve: {
                userResponse: ['BASE_URL', '$resource', '$stateParams', function(BASE_URL, $resource, $stateParams) {
                    return $resource(BASE_URL + '/users/:username', {username: '@username'})
                            .get({ username: $stateParams.username })
                            .$promise.then(
                                function(response) {
                                    return response;
                                }
                            );
                }]
            }
        },
        {
            name: 'repos',
            parent: 'master',
            url: '/user/:username/repos',
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
        },
        {
            name: 'followers',
            parent: 'master',
            url: '/user/:username/followers',
            templateUrl: FEATURE_DIR + '/followers/followers.view.html',
            controller: 'FollowersController',
            controllerAs: 'vm',
            resolve: {
                followersResponse: ['BASE_URL', '$resource', '$stateParams', function(BASE_URL, $resource, $stateParams) {
                    return $resource(BASE_URL + '/users/:username/followers', {username: '@username'})
                            .query({ username: $stateParams.username })
                            .$promise.then(
                                function(response) {
                                    return response;
                                }
                            );
                }]
            }
        },
        {
            name: 'following',
            parent: 'master',
            url: '/user/:username/following',
            templateUrl: FEATURE_DIR + '/following/following.view.html',
            controller: 'FollowingController',
            controllerAs: 'vm',
            resolve: {
                followingResponse: ['BASE_URL', '$resource', '$stateParams', function(BASE_URL, $resource, $stateParams) {
                    return $resource(BASE_URL + '/users/:username/following', {username: '@username'})
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