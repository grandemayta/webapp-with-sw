function SearchController(BASE_URL, $state) {
    this.search = '';

    this.searchUser = function() {
        $state.go('user', {username: this.search});
    };
}

SearchController.$inject = ['BASE_URL', '$state'];
app.controller('SearchController', SearchController);