function DetailController(detailResponse, $state) {
    this.detailResponse = detailResponse;

    this.showRepositories = function() {
        $state.go('repos', { username: this.detailResponse.login });
    };
}

DetailController.$inject = ['detailResponse', '$state'];
app.controller('DetailController', DetailController);