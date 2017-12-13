function DetailController(detailResponse) {
    console.log('DetailController', detailResponse);
}

DetailController.$inject = ['detailResponse'];
app.controller('DetailController', DetailController);