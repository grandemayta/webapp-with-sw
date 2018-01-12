var app = angular.module('webAppWithSW', [
    'ui.router',
    'ngResource'
]);

document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(document.body, ['webAppWithSW']);
});

/* window.addEventListener('load', function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(
            function(registration) {
                console.log('Registered service worker...');
            },
            function(error) {
                console.log(error);
            }
        );
    }
}); */