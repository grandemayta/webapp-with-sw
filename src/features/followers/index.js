export default {
    name: 'followers',
    path: '/user/:id/followers',
    component: () => System.import(/* webpackChunkName: "followers" */ './followers.component')
}