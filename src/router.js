import Vue from 'vue';
import VueRouter from 'vue-router';
import features from './features/features.module';

Vue.use(VueRouter)

const routes = [];

features.forEach(route => routes.push(route));

const router = {
    router: new VueRouter({
      mode: 'history',
      base: __dirname,
      routes
    }),
    template: `
        <div>
            <header class="mui-appbar mui--z1">
                <div class="mui-container">
                    <h2 ui-sref="search">WebApp + SW</h2>
                </div>
            </header>
            <div class="mui-container">
                <router-view></router-view>
            </div>
        </div>
    `
};

export default router;