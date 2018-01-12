function FollowingController(followingResponse) {
    this.followingResponse = followingResponse;
}

FollowingController.$inject = ['followingResponse'];
app.controller('FollowingController', FollowingController);