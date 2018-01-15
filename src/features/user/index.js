export default {
    name: 'user',
    path: '/user/:id',
    component: () => System.import(/* webpackChunkName: "user" */ './user.component')
};