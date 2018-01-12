function UserController(userResponse) {
    this.userResponse = userResponse;
}

UserController.$inject = ['userResponse'];
app.controller('UserController', UserController);