export default {
    name: 'following',
    path: '/user/:id/following',
    component: resolve => require(['./following.component'], resolve)
}