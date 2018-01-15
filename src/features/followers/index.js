export default {
    name: 'followers',
    path: '/user/:id/followers',
    component: resolve => require(['./followers.component'], resolve)
}