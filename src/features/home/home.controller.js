function HomeController(BASE_URL, $scope, $resource) {
    var User = $resource(BASE_URL + '/users/grandemayta');
    User.get(function(user) {
        console.log(user.company);
    });
    
    $scope.message = 'Welcome SW!';
}

HomeController.$inject = ['BASE_URL', '$scope', '$resource'];
app.controller('HomeController', HomeController);