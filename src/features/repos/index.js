export default {
    name: 'repos',
    path: '/user/:id/repos',
    component: () => System.import(/* webpackChunkName: "repos" */ './repos.component')
}