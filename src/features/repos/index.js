export default {
    name: 'repos',
    path: '/user/:id/repos',
    component: resolve => require(['./repos.component'], resolve)
}