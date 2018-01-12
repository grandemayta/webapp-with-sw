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
                userResponse: ['$stateParams', 'HttpWrapper', function($stateParams, HttpWrapper) {
                    return HttpWrapper
                            .get('/users/:username', { username: $stateParams.username }, { username: '@username' });
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
                reposResponse: ['$stateParams', 'HttpWrapper', function($stateParams, HttpWrapper) {
                    return HttpWrapper
                            .query('/users/:username/repos', { username: $stateParams.username }, { username: '@username' });
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
                followersResponse: ['$stateParams', 'HttpWrapper', function($stateParams, HttpWrapper) {
                    return HttpWrapper
                            .query('/users/:username/followers', { username: $stateParams.username }, {username: '@username'});
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
                followingResponse: ['$stateParams', 'HttpWrapper', function($stateParams, HttpWrapper) {
                    return HttpWrapper
                            .query('/users/:username/following', { username: $stateParams.username }, {username: '@username'});
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