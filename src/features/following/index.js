export default {
    name: 'following',
    path: '/user/:id/following',
    component: () => System.import(/* webpackChunkName: "following" */ './following.component')
}