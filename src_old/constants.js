function Constants($provide) {
    $provide.constant('BASE_URL', 'https://api.github.com');
    $provide.constant('FEATURE_DIR', './src/features');
}

Constants.$inject = ['$provide'];
app.config(Constants);