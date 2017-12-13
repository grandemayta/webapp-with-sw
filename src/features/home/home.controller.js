function HomeController(BASE_URL, $state) {
    this.search = '';

    this.searchUser = function() {
        $state.go('detail', {username: this.search});
    };
}

HomeController.$inject = ['BASE_URL', '$state'];
app.controller('HomeController', HomeController);