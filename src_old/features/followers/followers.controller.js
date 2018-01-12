function FollowersController(followersResponse) {
    this.followersResponse = followersResponse;
}

FollowersController.$inject = ['followersResponse'];
app.controller('FollowersController', FollowersController);