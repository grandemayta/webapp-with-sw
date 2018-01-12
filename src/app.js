import Vue from 'vue';
import router from './router';
import './http';


new Vue(router).$mount('#app')

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