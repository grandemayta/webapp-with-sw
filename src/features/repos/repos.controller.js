function ReposController(reposResponse) {
    this.reposResponse = reposResponse;
}

ReposController.$inject = ['reposResponse'];
app.controller('ReposController', ReposController);