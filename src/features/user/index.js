export default {
    name: 'user',
    path: '/user/:id',
    component: resolve => require(['./user.component'], resolve)
};